from rest_framework import serializers
from .models import *
from apps.creador.serializers import CreadorSerializer

class NivelCreateSerializer(serializers.ModelSerializer):
    #creador = CreadorSerializer()
    creador = serializers.CharField()
    class Meta:
        model = Nivel_Post
        fields = [
            'title',
            'slug',
            'thumbnail',
            'published',
            'json_nivel',
            'creador'
        ]

    def create(self, validated_data):
        creador_name = validated_data['creador']
        print(creador_name)

        try: 
            creador = Creador.objects.get(name=creador_name)
        except Creador.DoesNotExist:
            raise serializers.ValidationError("Creador no encontrado")

        nivel_obj = Nivel_Post.objects.create_nivel(
                                                    title=validated_data['title'], 
                                                    slug=validated_data['slug'],
                                                    thumbnail=validated_data['thumbnail'],
                                                    json_nivel=validated_data['json_nivel'],
                                                    creador=creador)

        return nivel_obj

class NivelSerializer(serializers.ModelSerializer):
    creador = CreadorSerializer()
    class Meta:
        model = Nivel_Post
        fields = [
            'id',
            'title',
            'slug',
            'thumbnail',
            'published',
            'views',
            'json_nivel',
            'creador'
        ]
    
#
        