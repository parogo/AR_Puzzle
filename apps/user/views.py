from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from .serializers import UserCreateSerializer, UserSerializer
from rest_framework import permissions, status
from django.core.exceptions import ValidationError
import re
from .validations import validate_email, validate_username, validate_password, validate_first_name, validate_last_name

# Create your views here.
class Register(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        #clean_data = custom_validation(request.data)
        serializer = UserCreateSerializer(data=request.data)

        if(request.data['password'] != request.data['re_password']):
            return Response({'password': 'Las contraseñas no coinciden'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            data = validate_email(request.data)
            data = validate_first_name(request.data)
            data = validate_last_name(request.data)
        except ValidationError as e:
            return Response({'email': re.sub(r'^..(.*)..$', r'\1', str(e))}, status=status.HTTP_400_BAD_REQUEST)

        try:
            data = validate_username(request.data)
        except ValidationError as e:
            return Response({'username': re.sub(r'^..(.*)..$', r'\1', str(e))}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            data = validate_password(request.data)
        except ValidationError as e:
            return Response({'password': re.sub(r'^..(.*)..$', r'\1', str(e))}, status=status.HTTP_400_BAD_REQUEST)

        if serializer.is_valid(raise_exception=True):
            user = serializer.create(request.data)
            if user:
                return Response({'success': 'Usuario creado exitosamente'}, status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

