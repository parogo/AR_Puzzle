from django.urls import path
from .views import *

urlpatterns = [ 
    path('list', ListCreadoresView.as_view()),
    path('<str:email>', GetCreadorByEmailView.as_view(),)
]