import React from 'react';
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { 
  UsersIcon, 
  TrophyIcon, 
  ChartBarIcon, 
  ShieldCheckIcon 
} from "lucide-react";

export default function MixBalancerLandingPage() {
  const colorPalette = {
    primary: "#1D3557",      // Azul profundo
    secondary: "#457B9D",    // Azul claro
    background: "#F1FAEE",   // Off-white
    text: "#1D3557",         // Azul profundo
    accent: "#E63946"        // Vermelho carmim
  };
  
  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundColor: colorPalette.background,
        backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('/api/placeholder/1920/1080?text=CS2+Dust2+Background')",
        color: colorPalette.text
      }}
    >
      {/* Navegação */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img 
              src="/mixbalancer.png" 
              alt="MixBalancer Logo" 
              className="w-10 h-10 rounded-full"
            />
            <h2 className="text-2xl font-bold text-gray-800">MixBalancer</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-100">
              Login
            </Button>
            <Button 
              style={{
                backgroundColor: colorPalette.primary,
                color: 'white'
              }}
            >
              Cadastrar
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 
            className="text-5xl font-extrabold mb-6"
            style={{color: colorPalette.text}}
          >
            Organize Mixes de CS2 Perfeitos
          </h1>
          <p 
            className="text-xl mb-8 text-gray-600"
          >
            Equilibre times, gerencie jogadores e crie as melhores partidas com o MixBalancer
          </p>
          
          <div className="flex justify-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  style={{
                    backgroundColor: colorPalette.secondary,
                    color: 'white'
                  }}
                >
                  Começar Agora
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Bem-vindo ao MixBalancer</DialogTitle>
                  <DialogDescription>
                    Crie sua conta e comece a organizar mixes incríveis de CS2
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <Separator 
        className="my-12 opacity-30" 
        style={{
          backgroundColor: colorPalette.text
        }} 
      />

      {/* Funcionalidades */}
      <section className="container mx-auto py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <UsersIcon className="w-12 h-12" />, 
              title: "Gerencie Jogadores", 
              description: "Adicione e acompanhe os níveis de habilidade dos seus jogadores"
            },
            { 
              icon: <TrophyIcon className="w-12 h-12" />, 
              title: "Crie Times", 
              description: "Monte times equilibrados com base no skill dos jogadores"
            },
            { 
              icon: <ChartBarIcon className="w-12 h-12" />, 
              title: "Acompanhe Estatísticas", 
              description: "Visualize o desempenho dos jogadores e times"
            }
          ].map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white border-gray-200 text-center p-6 hover:shadow-lg transition-all"
            >
              <CardContent className="flex flex-col items-center">
                <div 
                  className="mb-4 text-blue-600"
                >
                  {feature.icon}
                </div>
                <h3 
                  className="text-xl font-bold mb-2"
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Como Funciona */}
      <section className="container mx-auto py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold"
          >
            Como o MixBalancer Funciona
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              title: "Balanceamento Automático", 
              description: "Nosso algoritmo divide os times garantindo equilíbrio baseado no skill dos jogadores",
              icon: <ShieldCheckIcon className="w-12 h-12" />
            },
            { 
              title: "Gerenciamento Simples", 
              description: "Adicione jogadores, crie times e organize mixes em poucos cliques",
              icon: <UsersIcon className="w-12 h-12" />
            }
          ].map((step, index) => (
            <Card 
              key={index} 
              className="bg-white border-gray-200 text-center p-8"
            >
              <CardContent className="flex flex-col items-center">
                <div 
                  className="mb-4 text-green-600"
                >
                  {step.icon}
                </div>
                <h3 
                  className="text-2xl font-bold mb-4"
                >
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer 
        className="container mx-auto py-8 text-center bg-white border-t border-gray-200"
      >
        <p className="text-gray-600">© 2024 MixBalancer. Todos os direitos reservados.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">Termos de Uso</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Política de Privacidade</a>
        </div>
      </footer>
    </div>
  );
}