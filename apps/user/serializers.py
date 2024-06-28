from djoser.serializers import UserCreateSerializer
from rest_framework import serializers

from django.contrib.auth import get_user_model
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = [
            'id', 
            'email',
            'username',
            'password',
            'first_name',
            'last_name',
            'is_active',
            'is_staff',
            'is_editor'
        ]
    
    def create(self, clean_data):
        user_obj = User.objects.create_user(email=clean_data['email'], username=clean_data['username'], password=clean_data['password'], first_name=clean_data['first_name'], last_name=clean_data['last_name'])

        return user_obj
    
class UserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = [
            'id', 
            'email', 
            'username',
            'first_name', 
            'last_name', 
            'is_active', 
            'is_staff', 
            'is_editor'
        ]
        
