from rest_framework import serializers
from .models import *

class CreadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Creador
        fields = [
            'id',
            'name',
            'slug',
            'views'
        ]