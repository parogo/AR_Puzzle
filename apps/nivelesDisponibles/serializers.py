from rest_framework import serializers
from .models import *
from apps.creador.serializers import CreadorSerializer
from apps.nivel.serializers import NivelSerializer

class NivelesDisponiblesSerializer(serializers.ModelSerializer):
    creador = CreadorSerializer()
    nivel = NivelSerializer()
    class Meta:
        model = NivelesDisponibles
        fields = [
            'id',
            'creador',
            'nivel'
        ]

class NivelesDisponiblesListSerializer(serializers.ModelSerializer):
    nivel = NivelSerializer()
    #nivel = serializers.CharField()
    #user = CreadorSerializer()
    #user = serializers.CharField()
    class Meta:
        model = NivelesDisponibles
        fields = [
            'id',
            #'user',
            'nivel',
        ]
    

class NivelesDisponiblesCreateSerializer(NivelesDisponiblesSerializer):
    user = serializers.CharField()
    nivel = serializers.CharField()

    class Meta:
        model = NivelesDisponibles
        fields = [
            'id',
            'user',
            'nivel'
        ]

    def create(self, validated_data):
        creador_data = validated_data['user']
        nivel_data = validated_data['nivel']

        try: 
            user = Creador.objects.get(name=creador_data)
        except Creador.DoesNotExist:
            raise serializers.ValidationError("Creador no encontrado")
    
        try: 
            nivel = Nivel_Post.objects.get(title=nivel_data)
        except Creador.DoesNotExist:
            raise serializers.ValidationError("Nivel no encontrado")


        nivel_disponible = NivelesDisponibles.objects.create_niveles_disponibles(user=user, nivel=nivel)

        return nivel_disponible