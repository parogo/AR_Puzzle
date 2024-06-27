from django.db import models
from django.utils import timezone
from apps.creador.models import Creador
from apps.nivel.models import Nivel_Post


class NivelesDisponiblesManager(models.Manager):
    def create_niveles_disponibles(self, creador, nivel):
        if not creador:
            raise ValueError('El creador es obligatorio')
        if not nivel:
            raise ValueError('El nivel es obligatorio')
        
        nivel_disponible = self.create(user=creador, nivel=nivel)
        nivel_disponible.save()
        
        return nivel_disponible

# Create your models here.
class NivelesDisponibles(models.Model):
    id =    models.AutoField(primary_key=True)
    user =  models.ForeignKey(Creador, on_delete=models.CASCADE)
    nivel = models.ForeignKey(Nivel_Post, on_delete=models.CASCADE)

    objects = NivelesDisponiblesManager()

    class Meta:
        unique_together = ('user', 'nivel')

    def __str__(self):
        return str(self.id)