from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model
UserModel = get_user_model()

def validate_password(data):
    password    = data['password']
    re_password = data['re_password']

    if(password != re_password):
        raise ValidationError('Las contraseñas deben coincidir')
    return True

def validate_email(data):
    email = data['email']
    if not email:
        raise ValidationError('Por favcor ingrese un correo electrónico válido')
    
    if UserModel.objects.filter(email=email).exists():
        raise ValidationError('Ya existe un usuario con ese correo electrónico')
    return True

def validate_username(data):
    username = data['username']
    if not username:
        raise ValidationError('Por favor ingrese un nombre de usuario válido')
    
    if UserModel.objects.filter(username=username).exists():
        raise ValidationError('Ya existe un usuario con ese nombre de usuario')
    return True

def validate_first_name(data):
    first_name = data['first_name']
    if not first_name:
        raise ValidationError('Por favor ingrese un nombre válido')
    return True

def validate_last_name(data):
    last_name = data['last_name']
    if not last_name:
        raise ValidationError('Por favor ingrese un apellido válido')
    return True
