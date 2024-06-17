from django.shortcuts import render
from django.http import HttpResponse
from moviepy.editor import VideoFileClip

# Create your views here.

def base(req):
    return render(req,'base.html')
def generate(request):
    if request.method == 'POST' and request.FILES.get('file'):
        pass