from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Comunidad


class ListComunidadesView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Comunidad.objects.all().exists():
            print('Comunidades existen')
            return Response({'comunidades': 'test message'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No hay comunidades'}, status=status.HTTP_404_NOT_FOUND)