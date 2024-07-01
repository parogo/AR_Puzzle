from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from apps.creador.pagination import SetPagination
from apps.creador.serializers import CreadorSerializer
from .models import Creador
from apps.user.models import UserAccount  # Importar el modelo de usuario personalizado

class GetCreadorByEmailView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, email, format=None):
        try:
            user = UserAccount.objects.get(email=email)  # Busca el usuario por correo electrónico
            return Response({'creador': user.username}, status=status.HTTP_200_OK)
        except UserAccount.DoesNotExist:
            return Response({'error': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)

class ListCreadoresView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Creador.objects.all().exists():
            creadores = Creador.objects.all()

            result = []

            for creador in creadores:
                result.append({
                    'id': creador.id,
                    'name': creador.name,
                    'slug': creador.slug,
                    'views': creador.views
                })
            
            """ print(result)

            paginator = SetPagination()
            results = paginator.paginate_queryset(creadores, request)
            serializer = CreadorSerializer(results, many=True)

            return paginator.get_paginated_response({'creadores': serializer.data}) """
            
            return Response({'creadores': result}, status=status.HTTP_200_OK)
        else:
            #print('Creadores no existen, se ha liao')
            return Response({'error': 'No hay creadores'}, status=status.HTTP_404_NOT_FOUND)