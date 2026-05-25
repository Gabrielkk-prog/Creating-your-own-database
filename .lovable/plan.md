
# DevTech — Site do Evento

Site multi-página em React + TanStack Router com tema escuro inspirado no VSCode (roxo, preto, cinza).

## Paleta e tipografia

Tokens em `src/styles.css` (oklch):
- background: preto profundo (~#1e1e1e estilo VSCode)
- surface/card: cinza escuro (~#252526)
- border: cinza médio (~#3c3c3c)
- primary (roxo): ~#a371f7 / accent roxo vibrante
- primary-glow: roxo mais claro para hover/gradientes
- foreground: cinza claro (~#d4d4d4)
- muted-foreground: cinza médio

Fonte: JetBrains Mono para títulos/destaques (vibe VSCode) + Inter para corpo.

## Estrutura de rotas

```
src/routes/
  __root.tsx        → layout com Navbar + Footer + <Outlet/>
  index.tsx         → /
  cadastro.tsx      → /cadastro
  eventos.tsx       → /eventos
  login.tsx         → /login
```

Cada rota define `head()` com title/description/og próprios.

## Componentes compartilhados

- `src/components/Navbar.tsx` — links Início, Cadastro, Eventos, Login. Hover muda para roxo (text-primary), link ativo destacado.
- `src/components/Footer.tsx` — "© Todos os direitos reservados — DevTech".
- `src/components/Countdown.tsx` — contagem regressiva até 23/07/2026 (dias, horas, minutos, segundos) com `useEffect` + `setInterval`.
- `src/components/InfoCard.tsx` — card com ícone (lucide-react) + título + descrição.

## Página Início (`/`)

1. **Hero**: imagem de fundo (plateia em evento de tecnologia, gerada via imagegen) com overlay roxo translúcido. No centro, quadro branco com:
   - H1: "DevTech — O futuro da IA e Mobile"
   - Parágrafo: "Experiências imersivas com palestras, workshops e networking para impulsionar sua carreira."
2. **Countdown**: bloco abaixo do hero, "Evento em 23/07/2026" + contador (dias / horas / minutos / segundos) em cards estilo terminal.
3. **Grid de info cards** (4 cards com ícones lucide):
   - IA (Brain) — o que é IA
   - Mobile (Smartphone) — desenvolvimento mobile
   - Networking (Users) — conexões
   - Capacitação (GraduationCap) — aprendizado prático
4. **Sobre o evento**: seção com o texto completo fornecido + frase "O DevTech é o encontro de tecnologia mais inovador do ano."

## Página Cadastro (`/cadastro`)

Formulário (react-hook-form + zod para validação) com campos:
- Nome (text, obrigatório, max 100)
- Email (email, obrigatório)
- Telefone (text, obrigatório)
- Data de nascimento (date)
- Área de atuação (Select shadcn): Estudante / Desenvolvedor / Outros
- Como ficou sabendo? (RadioGroup): Instagram / Faculdade / Amigos
- Interesses (Checkbox group): Palestra IA / Workshop Mobile
- Observações (Textarea)
- Botão "Inscrever-se" — exibe toast de confirmação no submit (sem backend nesta fase).

## Página Eventos (`/eventos`)

Lista placeholder de palestras/workshops do dia 23/07/2026 com horários (palestra IA, palestra deepfakes, workshop mobile) em cards.

## Página Login (`/login`)

Formulário simples Email + Senha + botão "Entrar" (UI apenas, sem auth).

## Imagens

Gerar via `imagegen` e salvar em `src/assets/`:
- `hero-event.jpg` — plateia assistindo a palestra de tecnologia, iluminação cinemática (o overlay roxo é aplicado via CSS).

## Detalhes técnicos

- Substituir o placeholder em `src/routes/index.tsx`.
- Atualizar tokens `:root` e `.dark` em `src/styles.css`; aplicar classe `dark` no `<html>` no shell ou usar apenas `:root` com o tema escuro.
- Todas as cores via tokens semânticos (`bg-background`, `text-primary`, etc.) — nenhum hex inline em componentes.
- Sem backend (Lovable Cloud) — formulários apenas dão feedback visual.
