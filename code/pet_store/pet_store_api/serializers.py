from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Pet, Product


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'password', 'is_superuser', 'username')

    def create(self, validated_data):
        username = validated_data.pop('username')
        password = validated_data.pop('password')

        user_obj = User(username=username)
        user_obj.set_password(password)
        user_obj.save()

        return user_obj


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id', 'breed', 'picture', 'description')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'animal', 'price', 'category', 'picture', 'size', 'color', 'description')
