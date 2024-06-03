from rest_framework import serializers
from .models import *
from apps.creador.serializers import CreadorSerializer

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