from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Member

Member1=Member()
def homepage(request):
   return render(request,'homepage.html')

def register(request):
    return render(request, 'register.html')

def profile(request):
      Member1.username=request.POST['username']
      Member1.email=request.POST['email']
      Member1.password=request.POST['password']
      password2=request.POST['password2']
      return render(request,'postreg.html',{'username':Member1.username})
    

def login(request):
    return render(request, 'login.html')

def dashboard(request):
    return render(request,'dashboard.html',{'username':Member1.username} )

def resources(request):
    return render(request,'resources.html')

def about(request):
    return render(request,'about.html')
