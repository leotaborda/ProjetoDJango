from rest_framework import serializers
from .models import Filmes, Genero, ClassIf, Imagem


class ImagemSelializer(serializers.ModelSerializer):
    class Meta:
        model = Imagem
        fields = ['id', 'imagem']


class ClassIfSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassIf
        fields = ['id', 'classif']

class GeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genero
        fields = ['id', 'genre']
        
class FilmesSerializer(serializers.ModelSerializer):
    classif = ClassIfSerializer()
    genre = GeneroSerializer()
    class Meta:
        model = Filmes
        fields = ['id', 'titulo', 'genre', 'ano', 'idioma', 'classif']
