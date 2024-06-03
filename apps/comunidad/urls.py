from django.urls import path
from .views import *

urlpatterns = [ 
    path('list', ListComunidadesView.as_view)
]