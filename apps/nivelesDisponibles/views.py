from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import NivelesDisponibles, NivelesDisponiblesManager
from apps.creador.models import Creador
from apps.nivel.models import Nivel_Post

from .serializers import NivelesDisponiblesSerializer
from .pagination import SetPagination

from django.db.models import Q

class ListNivelesDisponiblesByUserView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, username, format=None):
        if NivelesDisponibles.objects.all().exists():
            
            busqueda_por_creador = Creador.objects.get(name=username)

            nivelesDisponibles = NivelesDisponibles.objects.order_by('id').all()

            nivelesDisponiblesByUser = nivelesDisponibles.filter(user=busqueda_por_creador)

            if not nivelesDisponiblesByUser.exists():
                return Response({"error": "No se encontraron niveles para el usuario especificado."}, status=status.HTTP_404_NOT_FOUND)

            filtered_niveles = []

            for nivel in nivelesDisponiblesByUser:
                filtered_niveles.append(nivel)

            filtered_niveles = tuple(filtered_niveles)

            #print(filtered_niveles)

            paginator = SetPagination()
            results = paginator.paginate_queryset(filtered_niveles, request)
            serializer = NivelesDisponiblesSerializer(results, many=True)

            return paginator.get_paginated_response({'niveles_creador': serializer.data})
            """ return Response({'success': 'niveles encontrados'}, status=status.HTTP_200_OK) """
        else:
            return Response({'error': 'no hay niveles disponibles'}, status=status.HTTP_404_NOT_FOUND)