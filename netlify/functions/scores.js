
// Netlify Function: /.netlify/functions/scores
// Proxies football-data.org so the API key never reaches the browser.
// Reads FOOTBALL_DATA_API_KEY from Netlify environment variables.

exports.handler = async function (event, context) {
  const API_KEY = process.env.FOOTBALL_DATA_API_KEY;

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
  };

  if (!API_KEY) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Server is missing FOOTBALL_DATA_API_KEY. Set it in Netlify > Site configuration > Environment variables.' }),
    };
  }

  try {
    const res = await fetch('https://api.football-data.org/v4/competitions/WC/matches', {
      headers: { 'X-Auth-Token': API_KEY },
    });

    if (!res.ok) {
      const text = await res.text();
      return {
        statusCode: res.status,
        headers,
        body: JSON.stringify({ error: 'Upstream error', status: res.status, detail: text }),
      };
    }

    const data = await res.json();

    const slim = (data.matches || []).map(m => ({
      id: m.id,
      utcDate: m.utcDate,
      status: m.status,
      minute: m.minute || null,
      stage: m.stage,
      group: m.group || null,
      homeTeam: m.homeTeam ? (m.homeTeam.name || m.homeTeam.shortName) : null,
      awayTeam: m.awayTeam ? (m.awayTeam.name || m.awayTeam.shortName) : null,
      homeScore: m.score && m.score.fullTime ? m.score.fullTime.home : null,
      awayScore: m.score && m.score.fullTime ? m.score.fullTime.away : null,
      venue: m.venue || null,
    }));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ matches: slim, fetchedAt: new Date().toISOString() }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Function error', detail: String(err) }),
    };
  }
};
