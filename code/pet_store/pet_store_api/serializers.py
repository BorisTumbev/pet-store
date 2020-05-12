from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Pet, Product


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'password', 'is_superuser', 'username')


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id', 'breed', 'picture', 'description')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'animal', 'price', 'category', 'picture', 'size', 'color', 'description')
