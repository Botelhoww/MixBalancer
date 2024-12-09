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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from 'next/link';

export default function MixBalancerLandingPage() {
  const colorPalette = {
    primary: "#1D3557",      // Azul profundo
    secondary: "#457B9D",    // Azul claro
    background: "#F1FAEE",   // Off-white
    text: "#1D3557",         // Azul profundo
    accent: "#E63946"        // Vermelho carmim
  };
  
  const testimonials = [
    {
      name: "João Silva",
      testimonial: "O MixBalancer transformou a forma como organizo meus jogos. É fácil e eficiente!",
    },
    {
      name: "Maria Oliveira",
      testimonial: "Adoro a interface e a simplicidade do MixBalancer. Recomendo a todos!",
    },
    {
      name: "Carlos Eduardo",
      testimonial: "Nunca mais tive problemas para formar times equilibrados. O MixBalancer é perfeito!",
    },
    {
      name: "Ana Costa",
      testimonial: "A melhor ferramenta para quem joga com amigos. Simples e funcional!",
    },
    {
      name: "Pedro Almeida",
      testimonial: "Formar times nunca foi tão fácil. MixBalancer economiza muito tempo!",
    },
    {
      name: "Julia Fernandes",
      testimonial: "Recomendo a todos os jogadores! O MixBalancer mudou nossa experiência de jogo.",
    },
    {
      name: "Roberto Lima",
      testimonial: "Minha comunidade de jogos adora essa ferramenta. Ótima para organizar torneios!",
    },
    {
      name: "Fernanda Santos",
      testimonial: "Uso sempre que organizamos mix na GC. Prático e rápido!",
    },
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundColor: colorPalette.background,
        backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('/api/placeholder/1920/1080?text=CS2+Dust2+Background')",
        color: colorPalette.text
      }}
    >
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
            Crie times equilibrados, gerencie jogadores e torne suas partidas ainda mais competitivas.
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
              description: "Organize seu elenco com facilidade, acompanhando níveis de habilidade e desempenho."
            },
            { 
              icon: <TrophyIcon className="w-12 h-12" />, 
              title: "Crie Times Perfeitos", 
              description: "Utilize nosso balanceamento inteligente para formar times competitivos em segundos."
            },
            { 
              icon: <ChartBarIcon className="w-12 h-12" />, 
              title: "Estatísticas Poderosas", 
              description: "Monitore o desempenho dos jogadores e dos times com gráficos detalhados."
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
              title: "Balanceamento Inteligente", 
              description: "Nosso sistema utiliza dados de habilidade para criar partidas equilibradas automaticamente.",
              icon: <ShieldCheckIcon className="w-12 h-12" />
            },
            { 
              title: "Organização Simplificada", 
              description: "Adicione jogadores, monte times e inicie suas partidas com apenas alguns cliques.",
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

      {/* Depoimentos */}
      <section className="container mx-auto py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">O que nossos usuários dizem</h2>
      </div>
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent className="-ml-4">
          {testimonials.map((user, index) => (
            <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
              <div className="p-6 bg-white border border-gray-200 text-center rounded-lg shadow-md">
                <p className="text-gray-600 italic">"{user.testimonial}"</p>
                <h4 className="font-bold mt-4">{user.name}</h4>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md" />
      </Carousel>
    </section>

      {/* Perguntas Frequentes */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Perguntas Frequentes</h2>
        </div>
        <div className="space-y-4">
          {[
            { question: "Como começo a usar o MixBalancer?", answer: "Clique em 'Cadastrar' para criar sua conta gratuitamente e começar a organizar partidas." },
            { question: "O MixBalancer oferece funcionalidades gratuitas?", answer: "Sim, funcionalidades básicas são totalmente gratuitas. Planos premium estão disponíveis para recursos avançados." },
            { question: "Posso gerenciar times com meus amigos?", answer: "Claro! Adicione amigos, organize jogadores e crie times para partidas inesquecíveis." }
          ].map((faq, index) => (
            <div key={index} className="bg-gray-50 p-4 border border-gray-200 rounded">
              <h4 className="font-bold">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer 
        className="container mx-auto py-8 text-center bg-white border-t border-gray-200"
      >
        <p className="text-gray-600">© 2024 MixBalancer. Sua plataforma de organização de partidas de CS2.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">Termos de Uso</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Política de Privacidade</a>
        </div>
      </footer>
    </div>
  );
}