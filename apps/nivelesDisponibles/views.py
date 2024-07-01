from django.forms import ValidationError
from django.shortcuts import get_object_or_404, render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import NivelesDisponibles, NivelesDisponiblesManager
from apps.creador.models import Creador
from apps.nivel.models import Nivel_Post

from .serializers import NivelesDisponiblesCreateSerializer, NivelesDisponiblesListSerializer
from .pagination import SetPagination, SetPaginationUnity
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from django.db.models import Q

class ListNivelesDisponiblesByUserView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, username, format=None):
        if NivelesDisponibles.objects.all().exists():
            
            busqueda_mediante_nuestro_usuario = Creador.objects.get(name=username)

            nivelesDisponibles = NivelesDisponibles.objects.order_by('id').all()

            nivelesDisponiblesByUser = nivelesDisponibles.filter(user=busqueda_mediante_nuestro_usuario)

            #if not nivelesDisponiblesByUser.exists():
            #    return Response({"error": "No se encontraron niveles para el usuario especificado."}, status=status.HTTP_404_NOT_FOUND)

            filtered_niveles = []

            for nivel in nivelesDisponiblesByUser:
                filtered_niveles.append(nivel)

            filtered_niveles = tuple(filtered_niveles)

            #print(filtered_niveles)

            paginator = SetPagination()
            results = paginator.paginate_queryset(filtered_niveles, request)
            serializer = NivelesDisponiblesListSerializer(results, many=True)
            
            return paginator.get_paginated_response({'niveles_creador': serializer.data})
            """ return Response({'success': 'niveles encontrados'}, status=status.HTTP_200_OK) """
        else:
            return Response({'error': 'no hay niveles disponibles'}, status=status.HTTP_404_NOT_FOUND)
        
class ListNivelesDisponiblesByUserUnityView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, username, format=None):
        if NivelesDisponibles.objects.all().exists():
            
            busqueda_mediante_nuestro_usuario = Creador.objects.get(name=username)

            nivelesDisponibles = NivelesDisponibles.objects.order_by('id').all()

            nivelesDisponiblesByUser = nivelesDisponibles.filter(user=busqueda_mediante_nuestro_usuario)

            #if not nivelesDisponiblesByUser.exists():
            #    return Response({"error": "No se encontraron niveles para el usuario especificado."}, status=status.HTTP_404_NOT_FOUND)

            filtered_niveles = []

            for nivel in nivelesDisponiblesByUser:
                filtered_niveles.append(nivel)

            filtered_niveles = tuple(filtered_niveles)

            #print(filtered_niveles)

            paginator = SetPaginationUnity()
            results = paginator.paginate_queryset(filtered_niveles, request)
            serializer = NivelesDisponiblesListSerializer(results, many=True)
            
            return paginator.get_paginated_response({'niveles_creador': serializer.data})
            """ return Response({'success': 'niveles encontrados'}, status=status.HTTP_200_OK) """
        else:
            return Response({'error': 'no hay niveles disponibles'}, status=status.HTTP_404_NOT_FOUND)
        
class addNivelDisponibleView(APIView):
    #permission_classes = (permissions.AllowAny,)
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication,)

    def post(self, request):
        serializer = NivelesDisponiblesCreateSerializer(data=request.data)
        
        if serializer.is_valid(raise_exception=True):
            try:
                nivel_disponible = serializer.create(request.data)
                return Response(NivelesDisponiblesCreateSerializer(nivel_disponible).data, status=status.HTTP_201_CREATED
                )
            except ValidationError as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# EL ID ES EL ID DE LA ASOCIACIÓN
class DeleteNivelDisponibleView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication,)

    def delete(self, request, id_relacion):
        nivel_disponible = get_object_or_404(NivelesDisponibles, id=id_relacion)
        
        # Verificamos que el usuario autenticado sea el propietario del nivel disponible
        if request.user.username != nivel_disponible.user.name:
            return Response({'error': 'No tienes permiso para eliminar este nivel'}, status=status.HTTP_403_FORBIDDEN)
        
        nivel_disponible.delete()
        return Response({'success': 'Nivel disponible eliminado correctamente'}, status=status.HTTP_204_NO_CONTENT)