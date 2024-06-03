from django.urls import path
from .views import *

urlpatterns = [ 
    path('list', ListNivelesView.as_view()),
    path('list/creator', ListNivelesByCreatorView.as_view()),
    path('detail/<slug>', NivelDetailView.as_view()),
    path('search', SearchNivelView.as_view()),
]