from rest_framework import serializers
from .models import *

class ComunidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comunidad
        fields = [
            'id',
            'name',
            'slug',
            'views'
        ]