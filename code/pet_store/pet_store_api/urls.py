from django.urls import path
from rest_auth.views import LogoutView
from .api import ULoginView, UserCreate, PetList, ProductList

urlpatterns = [
    path('api/login', ULoginView.as_view()),
    path('api/logout', LogoutView.as_view()),
    path('api/register', UserCreate.as_view()),

    path('api/pets', PetList.as_view()),
    path('api/products', ProductList.as_view()),
]
