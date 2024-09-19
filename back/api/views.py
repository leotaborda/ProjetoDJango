from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Filmes, Genero, ClassIf, Imagem
from .serializer import FilmesSerializer, GeneroSerializer, ClassIfSerializer, ImagemSelializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser


@api_view(['GET', 'POST'])
def listar_filmes(request):
    if request.method == 'GET':
        queryset = Filmes.objects.all()
        serializer = FilmesSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FilmesSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
        
class FilmesViews(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Filmes.objects.all()
    serializer_class = FilmesSerializer

class FilmesDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Filmes.objects.all()
    serializer_class = FilmesSerializer

class GeneroViews(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer

class ClassIfViews(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = ClassIf.objects.all()
    serializer_class = GeneroSerializer

class FilmesListCreateView(generics.ListCreateAPIView):
    queryset = Filmes.objects.all()
    serializer_class = FilmesSerializer

class FilmesDetailView(generics.RetrieveAPIView):
    queryset = Filmes.objects.all()
    serializer_class = FilmesSerializer

class ImageListCreateView(ListCreateAPIView):
    queryset = Imagem.objects.all()
    serializer_class = ImagemSelializer
    