from rest_framework import serializers
from .models import *
from apps.creador.serializers import CreadorSerializer
from apps.nivel.serializers import NivelSerializer

class NivelesDisponiblesCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = NivelesDisponibles
        fields = [
            'id',
            'user',
            'nivel'
        ]
    def create(self, validated_data):
        creador_data = validated_data.pop('creador')
        nivel_data = validated_data.pop('nivel')
        creador_obj = Creador.objects.create(**creador_data)
        nivel_obj = Nivel_Post.objects.create(**nivel_data)
        nivel_disponible = NivelesDisponibles.objects.create(user=creador_obj, nivel=nivel_obj)
        nivel_disponible.save()
        return nivel_disponible
    
class NivelesDisponiblesSerializer(serializers.ModelSerializer):
    user = CreadorSerializer()
    nivel = NivelSerializer()
    class Meta:
        model = NivelesDisponibles
        fields = [
            'id',
            'user',
            'nivel'
        ]
    