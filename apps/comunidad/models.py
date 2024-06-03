from django.db import models

# Create your models here.
class Comunidad(models.Model):
    class Meta:
        verbose_name = 'Comunidad'
        verbose_name_plural = 'Comunidades'

    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)

    views = models.PositiveIntegerField(default=0, blank=True)

    parent = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True, related_name='children')

    def __str__(self):
        return self.name
    
    def get_view_count(self):
        views = ViewCount.objects.filter(comunidad=self).count()
        return views
    
class ViewCount(models.Model):
    comunidad = models.ForeignKey(Comunidad, on_delete=models.CASCADE, related_name='comunidad_view_count')
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.ip_address}'