# Generated by Django 4.2.11 on 2024-05-28 09:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('creador', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='creador',
            name='views',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]