from typing import Any
from django.db import models


class Imagem(models.Model):
    imagem = models.ImageField(upload_to='capa', blank=True, null=True)
    

class ClassIf(models.Model):
    classif = models.CharField(max_length=255)
    def __str__(self):
        return self.classif

class Genero(models.Model):
    genre = models.CharField(max_length=255)
    def __str__(self):
        return self.genre

class Filmes(models.Model):
    titulo = models.CharField(max_length=255)
    genre = models.ForeignKey(Genero, on_delete=models.CASCADE)
    ano = models.CharField(max_length=255)
    idioma = models.CharField(max_length=255)
    classif = models.ForeignKey(ClassIf, on_delete=models.CASCADE)
    # urlImage = models.CharField(max_length=255)
    # imagem = models.ImageField(upload_to='capa/', blank=True, null=True)
    