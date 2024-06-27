from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Nivel_Post, NivelManager, ViewCount
from apps.creador.models import Creador

from .serializers import NivelSerializer
from .pagination import SetPagination

from django.db.models import Q

# Esta vista es para listar todos los niveles
class ListNivelesView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Nivel_Post.objects.all().exists():
            niveles = Nivel_Post.objects.all()

            paginator = SetPagination()
            results = paginator.paginate_queryset(niveles, request)
            serializer = NivelSerializer(results, many=True)

            return paginator.get_paginated_response({'lista_niveles': serializer.data})
        else:
            return Response({'error': 'nivel no encontrado'}, status=status.HTTP_404_NOT_FOUND)

# Esta vista es para buscar niveles por creador
class ListNivelesByCreatorView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Nivel_Post.objects.all().exists():
            
            creador_slug = request.query_params.get('creador_slug', None)
            busqueda_por_creador = Creador.objects.get(slug=creador_slug)

            niveles = Nivel_Post.objects.order_by('published').all()

            niveles = niveles.filter(creador=busqueda_por_creador)
            
            filtered_niveles = []

            for nivel in niveles:
                filtered_niveles.append(nivel)

            filtered_niveles = tuple(filtered_niveles)

            #print(filtered_niveles)

            paginator = SetPagination()
            results = paginator.paginate_queryset(filtered_niveles, request)
            serializer = NivelSerializer(results, many=True)

            return paginator.get_paginated_response({'niveles_creador': serializer.data})
            """ return Response({'success': 'niveles encontrados'}, status=status.HTTP_200_OK) """
        
        
        else:
            return Response({'error': 'nivel no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        
# Esta vista es para buscar un nivel por slug
class NivelDetailView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, slug, format=None):
        if Nivel_Post.objects.filter(slug=slug).exists():
            nivel = Nivel_Post.objects.get(slug=slug)
            
            # Con esto cuenta las views de un nivel por IP
            address = request.META.get('HTTP_X_FORWARDED_FOR')

            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')

            if not ViewCount.objects.filter(nivel=nivel, ip_address=ip):
                view = ViewCount(nivel=nivel,ip_address=ip)
                view.save()
                nivel.views += 1
                nivel.save()
                nivel.creador.views += 1
                nivel.creador.save()
            # Con esto cuenta las views de un nivel por IP

            serializer = NivelSerializer(nivel)
            print("nivel detallado: " + nivel.title + " con " + str(nivel.views) + " vistas")
            return Response({'nivel_detallado':serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'nivel no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        
# Esta vista es para buscar un nivel dada una búsqueda por el usuario (por título o por creador)
class SearchNivelView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def get(self, request, format=None):

        # Los filtros Q son para hacer busquedas en Django, por ejemplo con varios campos
        search_term = request.query_params.get('s')
        matches = Nivel_Post.objects.filter(
            Q(title__icontains=search_term) | 
            Q(creador__name__icontains=search_term)
        )
        
        paginator = SetPagination()
        results = paginator.paginate_queryset(matches, request)
        serializer = NivelSerializer(results, many=True)

        return paginator.get_paginated_response({'niveles_filtrados': serializer.data})