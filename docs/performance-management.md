# Performance Management

## 🎯 Visão Geral

Performance management é um processo contínuo de comunicação entre manager e engineer para atingir objetivos organizacionais e de desenvolvimento individual.

## 📋 Componentes Principais

### 1. Setting Expectations

**O quê:**
- Definir claramente o que é esperado em termos de deliverables, qualidade e comportamento
- Alinhar com objetivos da equipa e da organização
- Documentar em local acessível (OKRs, goals do quarter)

**Como:**
- No início de cada cycle/quarter
- Durante onboarding de novos team members
- Quando há mudança de scope ou responsibilities

**Template:**
```
## Expectativas para [Nome] - [Quarter/Ano]

### Deliverables
- [ ] Entregar feature X até [data]
- [ ] Reduzir bugs em Y%
- [ ] Melhorar performance em Z%

### Comportamento
- Comunicação proativa de blockers
- Participação ativa em code reviews
- Mentoria de juniors

### MetriCAS de Sucesso
- Velocity: X story points/sprint
- Quality: <Y% bug rate
- Collaboration: Z reviews/week
```

### 2. Feedback Contínuo

**Princípios:**
- **Frequente:** Pelo menos semanalmente (podes usar 1:1s)
- **Específico:** Baseado em exemplos concretos
- **Balanceado:** Positive e constructive feedback
- **Accionável:** Com sugestões claras de melhoria

**Modelo SBI (Situation-Behavior-Impact):**
```
Situação: "Na review de sexta-feira..."
Comportamento: "...quando apresentaste o projeto sem testes..."
Impacto: "...o cliente perdeu confiança na entrega"
```

### 3. Performance Reviews

**Frequência:** Quarterly ou bi-annually

**Estrutura:**
1. **Self-assessment** (engineer reflete sobre o período)
2. **Manager assessment** (tua avaliação baseada em dados)
3. **Peer feedback** (360° quando possível)
4. **Calibration** (com outros managers para consistência)
5. **Review meeting** (conversa final)

**Áreas de Avaliação:**
- Technical excellence
- Delivery & execution
- Collaboration & communication
- Leadership & influence
- Growth & learning

### 4. Performance Improvement Plan (PIP)

**Quando usar:**
- Performance consistentemente abaixo do esperado
- Após múltiplos feedbacks sem melhoria
- Como último recurso antes de termination

**Estrutura do PIP:**
- Duração: 30-60-90 days
- Objetivos claros e mensuráveis
- Check-ins semanais obrigatórios
- Documentação rigorosa

> ⚠️ **Importante:** PIP deve ser visto como oportunidade de melhoria, não como pré-aviso de despedimento.

## 📊 Métricas de Performance

### SPACE Framework

| Dimensão | O que medir | Exemplos |
|----------|-------------|----------|
| **S**atisfaction | Bem-estar e satisfação | Survey scores, retention |
| **P**erformance | Qualidade do output | Bug rates, incident count |
| **A**ctivity | Volume de trabalho | Commits, PRs, deployments |
| **C**ommunication | Colaboração | Code reviews, documentation |
| **E**fficiency | Flow e velocidade | Cycle time, lead time |

### DORA Metrics

- **Deployment Frequency:** Quantas vezes fazes deploy
- **Lead Time for Changes:** Tempo do commit ao production
- **Change Failure Rate:** % de deploys que causam incidents
- **Time to Restore:** Tempo para recuperar de incidents

## 🛠️ Ferramentas Recomendadas

- **Jira/Linear:** Tracking de deliverables
- **Confluence/Notion:** Documentação de expectativas
- **Lattice/15Five:** Performance reviews e feedback
- **GitHub/GitLab:** Activity metrics

## ✅ Checklist para Managers

- [ ] Expectativas claras e documentadas
- [ ] Feedback dado regularmente (não apenas em reviews)
- [ ] Dados objetivos para suportar avaliações
- [ ] Plano de desenvolvimento para cada team member
- [ ] PIP apenas quando necessário e bem documentado

## 📚 Recursos Adicionais

- [The Manager's Path - Camille Fournier](https://www.oreilly.com/library/view/the-managers-path/9781491973882/)
- [An Elegant Puzzle - Will Larson](https://lethain.com/elegant-puzzle/)
- [High Output Management - Andy Grove](https://www.grove.com/)

---

**Próximo:** [MBTI Guide](mbti-guide.md)
