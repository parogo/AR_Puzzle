from django.urls import path
from .views import *

urlpatterns = [
    path('list/<username>', ListNivelesDisponiblesByUserView.as_view()),
    path('listUnity/<username>', ListNivelesDisponiblesByUserUnityView.as_view()),
    path('create',  addNivelDisponibleView.as_view()),
    path('delete/<int:id_relacion>', DeleteNivelDisponibleView.as_view()),
]