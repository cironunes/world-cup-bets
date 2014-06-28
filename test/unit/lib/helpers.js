function mockBet(home, homeBet, away, awayBet) {
  return {
    home_team: {
      code: home,
      bet: homeBet
    },
    away_team: {
      code: away,
      bet: awayBet
    }
  };
}
