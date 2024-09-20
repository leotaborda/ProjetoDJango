from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import FilmesListCreateView, FilmesDetailView
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('filmes', views.listar_filmes),
    path('listarfilmes', views.FilmesViews.as_view()),
    path('filme/<int:pk>', views.FilmesDetailView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('genero/<int:pk>', views.GeneroViews.as_view()),
    path('filmes/', FilmesListCreateView.as_view(), name='filmes-list'), 
    path('filme/<int:pk>/', FilmesDetailView.as_view(), name='filme-detail'),
    path('imagem/', views.ImageListCreateView.as_view(), name='imagem-list-create')
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
