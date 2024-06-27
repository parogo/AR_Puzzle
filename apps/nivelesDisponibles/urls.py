from django.urls import path
from .views import *

urlpatterns = [
    path('list/<username>', ListNivelesDisponiblesByUserView.as_view()),
]