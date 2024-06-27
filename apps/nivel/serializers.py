from rest_framework import serializers
from .models import *
from apps.creador.serializers import CreadorSerializer

class NivelCreateSerializer(serializers.ModelSerializer):
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
        nivel = Nivel_Post.objects.create(
            title = validated_data['title'],
            slug = validated_data['slug'],
            thumbnail = validated_data['thumbnail'],
            published = validated_data['published'],
            json_nivel = validated_data['json_nivel'],
            creador = validated_data['creador']
        )
        nivel.save()
        return nivel
    
    def create(self, validated_data):
        creador_data = validated_data.pop('creador')
        creador_obj = Creador.objects.create(**creador_data)
        nivel_obj = Nivel_Post.objects.create(**validated_data, creador=creador_obj)
        nivel_obj.save()
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
        