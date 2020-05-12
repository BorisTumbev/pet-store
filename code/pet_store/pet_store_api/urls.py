from django.urls import path
from rest_auth.views import LogoutView
from .api import ULoginView, UserCreate

urlpatterns = [
    path('api/login', ULoginView.as_view()),
    path('api/logout', LogoutView.as_view()),
    path('api/register', UserCreate.as_view()),
]
