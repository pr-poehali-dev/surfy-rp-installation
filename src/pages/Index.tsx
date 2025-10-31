import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleDownload = () => {
    window.open("https://example.com/surfy-rp-installer.exe", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] via-[#2a2f45] to-[#6E59A5] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Yjg3ZjUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2di00aDRsLTQtNHYtNGg0di00aC00di00aDR2LTRoLTR2LTRoNHYtNGgtNHYtNGgtNHYtNGg0djRoNHY0aC00djRoNHYtNGg0djRoLTR2NGg0di00aDR2NGgtNHY0aDR2NGgtNHY0aDR2NGgtNHY0aDR2NGgtNHYtNGgtNHY0aC00di00aDR2LTRoLTR2NGgtNHYtNGg0di00aC00di00aDR2LTRoLTR2NGgtNHYtNGg0di00aC00di00aDR2NGg0di00aDR2NGg0di00aDR2NGgtNHYtNGgtNHY0aC00di00aDR2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[90vh] text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tight">
              SURFY RP
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 font-medium">
              Погрузись в мир ролеплея
            </p>
          </div>

          <Button 
            onClick={handleDownload}
            size="lg"
            className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 animate-glow shadow-2xl"
          >
            <Icon name="Download" size={28} className="mr-3" />
            Скачать игру
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <Icon name="Users" size={48} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Живое сообщество</h3>
              <p className="text-muted-foreground">
                Тысячи игроков онлайн каждый день
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <Icon name="Gamepad2" size={48} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Уникальный геймплей</h3>
              <p className="text-muted-foreground">
                Создай свою историю в мире Surfy
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <Icon name="Zap" size={48} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Быстрая установка</h3>
              <p className="text-muted-foreground">
                Установи и начни играть за минуту
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-4 text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <Icon name="HardDrive" size={20} />
              Требуется: 5 ГБ свободного места
            </p>
            <p className="flex items-center justify-center gap-2">
              <Icon name="Monitor" size={20} />
              Работает на Android
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;