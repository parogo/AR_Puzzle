from django.urls import path
from .views import *

urlpatterns = [ 
    path('list', ListNivelesView.as_view()),
    path('listUnity', ListNivelesUnityView.as_view()),
    path('list/creator', ListNivelesByCreatorView.as_view()),
    path('listUnity/creator', ListNivelesByCreatorUnityView.as_view()),
    path('detail/<slug>', NivelDetailView.as_view()),

    path('checkLike/<slug>', NivelLikeView.as_view()),
    path('like/<slug>', NivelDarLikeView.as_view()),
    path('dislike/<slug>', NivelQuitarLikeView.as_view()),

    path('search', SearchNivelView.as_view()),
    path('create', CreateNivelView.as_view()),
    path('delete/<slug>', DeleteNivelView.as_view()),  # Nueva ruta para eliminar niveles
]