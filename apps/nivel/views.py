from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import Nivel_Post, NivelManager, ViewCount, LikeCount
from apps.creador.models import Creador

from rest_framework.parsers import MultiPartParser, FormParser

from .serializers import NivelCreateSerializer, NivelSerializer
from .pagination import SetPagination, SetPaginationUnity

from django.db.models import Q

# Esta vista es para listar todos los niveles
class ListNivelesView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Nivel_Post.objects.all().exists():
            niveles = Nivel_Post.objects.all().order_by('-views')

            paginator = SetPagination()
            results = paginator.paginate_queryset(niveles, request)
            serializer = NivelSerializer(results, many=True)

            return paginator.get_paginated_response({'lista_niveles': serializer.data})
        else:
            return Response({'error': 'nivel no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        
class ListNivelesUnityView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Nivel_Post.objects.all().exists():
            niveles = Nivel_Post.objects.all().order_by('-views')

            paginator = SetPaginationUnity()
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

            niveles = Nivel_Post.objects.order_by('-views').all()

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
        
# Esta vista es para buscar niveles por creador
class ListNivelesByCreatorUnityView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Nivel_Post.objects.all().exists():
            
            creador_slug = request.query_params.get('creador_slug', None)
            busqueda_por_creador = Creador.objects.get(slug=creador_slug)

            niveles = Nivel_Post.objects.order_by('-views').all()

            niveles = niveles.filter(creador=busqueda_por_creador)
            
            filtered_niveles = []

            for nivel in niveles:
                filtered_niveles.append(nivel)

            filtered_niveles = tuple(filtered_niveles)

            #print(filtered_niveles)

            paginator = SetPaginationUnity()
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
            #print("nivel detallado: " + nivel.title + " con " + str(nivel.views) + " vistas")
            return Response({'nivel_detallado':serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'nivel no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        
class NivelLikeView(APIView):
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

            like_dado = False

            if ViewCount.objects.filter(nivel=nivel, ip_address=ip) and LikeCount.objects.filter(nivel=nivel, ip_address=ip):
                like_dado = True

            return Response({'like_dado':like_dado}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'nivel no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        
class NivelDarLikeView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication,)

    def post(self, request, slug, format=None):
        if Nivel_Post.objects.filter(slug=slug).exists():
            nivel = Nivel_Post.objects.get(slug=slug)
            
            # Con esto cuenta las views de un nivel por IP
            address = request.META.get('HTTP_X_FORWARDED_FOR')

            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')

            if not ViewCount.objects.filter(nivel=nivel, ip_address=ip).exists():
                view = ViewCount(nivel=nivel, ip_address=ip)
                view.save()
                nivel.views += 1
                nivel.save()
                nivel.creador.views += 1
                nivel.creador.save()
                
            if not LikeCount.objects.filter(nivel=nivel, ip_address=ip).exists():
                like = LikeCount(nivel=nivel, ip_address=ip)
                like.save()
                nivel.likes += 1
                nivel.save()
                nivel.creador.likes += 1
                nivel.creador.save()
            
            serializer = NivelSerializer(nivel)
            return Response({'like_dado': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'nivel no encontrado'}, status=status.HTTP_404_NOT_FOUND)

        
class NivelQuitarLikeView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication,)

    def delete(self, request, slug, format=None):
        if Nivel_Post.objects.filter(slug=slug).exists():
            nivel = get_object_or_404(Nivel_Post, slug=slug)

            # Con esto cuenta las views de un nivel por IP
            address = request.META.get('HTTP_X_FORWARDED_FOR')

            eliminado = False

            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')

            # Recuperar las instancias existentes
            view = ViewCount.objects.filter(nivel=nivel, ip_address=ip).first()
            like = LikeCount.objects.filter(nivel=nivel, ip_address=ip).first()

            if view and like:
                eliminado = True
                view.delete()
                like.delete()
                nivel.likes -= 1
                nivel.save()
                nivel.creador.likes -= 1
                nivel.creador.save()

            return Response({'like_eliminado': eliminado}, status=status.HTTP_200_OK)
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
        ).order_by('-views')
        
        paginator = SetPagination()
        results = paginator.paginate_queryset(matches, request)
        serializer = NivelSerializer(results, many=True)

        return paginator.get_paginated_response({'niveles_filtrados': serializer.data}) 
    
class CreateNivelView(APIView):
    #permission_classes = (permissions.AllowAny,)
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication,)
    parser_classes = (MultiPartParser, FormParser)
    
    def post(self, request):
        serializer = NivelCreateSerializer(data=request.data)
        
        if serializer.is_valid(raise_exception=True):
            try:
                nivel_creado = serializer.create(request.data)
                
                return Response(NivelCreateSerializer(nivel_creado).data, status=status.HTTP_201_CREATED)
            except:
                return Response({'error': 'no se pudo crear el nivel xD'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class DeleteNivelView(APIView):
    #permission_classes = (permissions.AllowAny,)
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication,)

    def delete(self, request, slug, format=None):
        nivel = get_object_or_404(Nivel_Post, slug=slug)
        
        # Verificar si el usuario autenticado es el creador del nivel
        if request.user != nivel.creador.user:
            return Response({'error': 'No tienes permiso para eliminar este nivel'}, status=status.HTTP_403_FORBIDDEN)
        
        nivel.delete()
        return Response({'success': 'Nivel eliminado correctamente'}, status=status.HTTP_204_NO_CONTENT)