import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from "@/components/ui/alert-dialog";
import { 
  HoverCard, 
  HoverCardContent, 
  HoverCardTrigger 
} from "@/components/ui/hover-card";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { 
  RocketIcon, 
  InfoCircledIcon, 
  CheckCircledIcon,
  StarFilledIcon, 
  IconJarLogoIcon
} from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  // Paleta de cores personalizada
  const colorPalette = {
    primary: "#3B82F6",      // Azul vibrante
    secondary: "#10B981",    // Verde esmeralda
    accent: "#8B5CF6",       // Roxo profundo
    background: "#F9FAFB",   // Cinza claro
    text: "#1F2937",         // Cinza escuro
  };

  return (
    <div 
      className="min-h-screen bg-background text-text"
      style={{
        backgroundColor: colorPalette.background,
        color: colorPalette.text
      }}
    >
      {/* Navegação Moderna */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <IconJarLogoIcon
              className="w-8 h-8" 
              color={colorPalette.primary} 
            />
            <h2 className="text-2xl font-bold">SuaPlataforma</h2>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  style={{color: colorPalette.primary}}
                >
                  Produtos
                </NavigationMenuTrigger>
                <NavigationMenuContent 
                  className="bg-white shadow-xl rounded-lg p-4"
                >
                  <ul className="grid gap-3 md:w-[400px]">
                    {["Produto 1", "Produto 2", "Produto 3"].map((produto, index) => (
                      <li 
                        key={index} 
                        className="hover:bg-gray-100 p-2 rounded transition-colors"
                      >
                        {produto}
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Hero Section Aprimorada */}
      <header className="container mx-auto py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 
            className="text-5xl font-extrabold mb-6"
            style={{color: colorPalette.text}}
          >
            Transforme Sua Ideia em Realidade
          </h1>
          <p 
            className="text-xl mb-8 text-gray-600"
            style={{color: `${colorPalette.text}90`}}
          >
            Soluções inovadoras para impulsionar seu negócio com tecnologia de ponta
          </p>
          
          <div className="flex justify-center space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    style={{
                      backgroundColor: colorPalette.primary,
                      color: 'white'
                    }}
                  >
                    Comece Agora
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Inicie sua jornada de transformação
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  Saiba Mais
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sobre Nossa Plataforma</DialogTitle>
                  <DialogDescription>
                    Conectamos tecnologia e inovação para resolver desafios reais
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <Separator 
        style={{
          backgroundColor: `${colorPalette.primary}50`
        }} 
      />

      {/* Seção de Destaques com Carrossel */}
      <section className="container mx-auto py-16">
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {[
              { title: "Solução Inteligente", description: "Tecnologia que entende suas necessidades" },
              { title: "Suporte Especializado", description: "Equipe dedicada 24/7" },
              { title: "Escalabilidade", description: "Cresca sem limites" }
            ].map((item, index) => (
              <CarouselItem key={index}>
                <Card 
                  className="hover:shadow-xl transition-all duration-300"
                  style={{
                    borderColor: colorPalette.secondary,
                    backgroundColor: 'white'
                  }}
                >
                  <CardHeader>
                    <CardTitle 
                      style={{color: colorPalette.accent}}
                    >
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge 
                      style={{
                        backgroundColor: colorPalette.secondary,
                        color: 'white'
                      }}
                    >
                      Destaque
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Seção de Depoimentos */}
      <section className="container mx-auto py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold"
            style={{color: colorPalette.text}}
          >
            O Que Nossos Clientes Dizem
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Ana Silva", role: "CEO, Empresa X", text: "Revolucionou nossa abordagem" },
            { name: "Carlos Oliveira", role: "CTO, Startup Y", text: "Solução elegante e eficiente" },
            { name: "Marina Santos", role: "Gerente, Corporação Z", text: "Suporte excepcional" }
          ].map((testimonial, index) => (
            <Card 
              key={index} 
              className="text-center p-6 hover:shadow-lg transition-all"
            >
              <CardContent>
                <Avatar className="mx-auto mb-4">
                  <AvatarImage src={`/api/placeholder/100/100?text=${testimonial.name.split(' ')[0]}`} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <p className="italic mb-4">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Rodapé Simples */}
      <footer 
        className="container mx-auto py-8 text-center"
        style={{
          backgroundColor: `${colorPalette.primary}10`,
          color: colorPalette.text
        }}
      >
        <p>© 2024 SuaPlataforma. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}