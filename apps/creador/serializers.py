from rest_framework import serializers
from .models import *
from apps.user.serializers import UserSerializer

class CreadorSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Creador
        fields = [
            'id',
            'name',
            'slug',
            'views',
            'user'
        ]