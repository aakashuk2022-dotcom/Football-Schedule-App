// FIFA World Cup 2026 — full schedule, UK kick-off times (BST, UTC+1, in effect for the whole tournament)
// Times sourced from Sky Sports' day-by-day breakdown. ISO strings are in UK local time with +01:00 offset.
const MATCHES = [
  // ---- Thursday 11 June ----
  { id: 1, stage: "Group A", teams: "Mexico vs South Africa", venue: "Mexico City, Mexico", kickoff: "2026-06-11T20:00:00+01:00", score: "2-0", status: "FT" },

  // ---- Friday 12 June ----
  { id: 2, stage: "Group A", teams: "South Korea vs Czech Republic", venue: "Zapopan, Mexico", kickoff: "2026-06-12T23:00:00+01:00", score: "2-1", status: "FT" },
  { id: 3, stage: "Group B", teams: "Canada vs Bosnia-Herzegovina", venue: "Toronto, Canada", kickoff: "2026-06-12T20:00:00+01:00", score: "1-1", status: "FT" },

  // ---- Saturday 13 June ----
  { id: 4, stage: "Group D", teams: "USA vs Paraguay", venue: "Los Angeles, USA", kickoff: "2026-06-13T21:00:00+01:00", score: "4-1", status: "FT" },
  { id: 5, stage: "Group B", teams: "Qatar vs Switzerland", venue: "Santa Clara, USA", kickoff: "2026-06-13T18:00:00+01:00", score: "1-1", status: "FT" },
  { id: 6, stage: "Group C", teams: "Brazil vs Morocco", venue: "New Jersey, USA", kickoff: "2026-06-14T00:00:00+01:00", score: "1-1", status: "FT" },

  // ---- Sunday 14 June ----
  { id: 7, stage: "Group C", teams: "Haiti vs Scotland", venue: "Foxborough, USA", kickoff: "2026-06-14T18:00:00+01:00", score: "0-1", status: "FT" },
  { id: 8, stage: "Group D", teams: "Australia vs Turkey", venue: "Vancouver, Canada", kickoff: "2026-06-14T21:00:00+01:00", score: "2-0", status: "FT" },
  { id: 9, stage: "Group E", teams: "Germany vs Curacao", venue: "Houston, USA", kickoff: "2026-06-15T00:00:00+01:00", score: "7-1", status: "FT" },
  { id: 10, stage: "Group F", teams: "Netherlands vs Japan", venue: "Arlington, USA", kickoff: "2026-06-14T21:00:00+01:00", score: "2-2", status: "FT" },

  // ---- Monday 15 June ----
  { id: 11, stage: "Group E", teams: "Ivory Coast vs Ecuador", venue: "Philadelphia, USA", kickoff: "2026-06-15T18:00:00+01:00", score: "1-0", status: "FT" },
  { id: 12, stage: "Group F", teams: "Sweden vs Tunisia", venue: "Guadalupe, Mexico", kickoff: "2026-06-15T21:00:00+01:00", score: "5-1", status: "FT" },
  { id: 13, stage: "Group H", teams: "Spain vs Cape Verde", venue: "Atlanta, USA", kickoff: "2026-06-15T18:00:00+01:00", score: "0-0", status: "FT" },
  { id: 14, stage: "Group G", teams: "Belgium vs Egypt", venue: "Seattle, USA", kickoff: "2026-06-15T21:00:00+01:00", score: "1-1", status: "FT" },
  { id: 15, stage: "Group H", teams: "Saudi Arabia vs Uruguay", venue: "Miami, USA", kickoff: "2026-06-16T00:00:00+01:00", score: "1-1", status: "FT" },

  // ---- Tuesday 16 June ----
  { id: 16, stage: "Group G", teams: "Iran vs New Zealand", venue: "Los Angeles, USA", kickoff: "2026-06-16T21:00:00+01:00", score: "2-2", status: "FT" },
  { id: 17, stage: "Group I", teams: "France vs Senegal", venue: "New Jersey, USA", kickoff: "2026-06-16T21:00:00+01:00", score: "3-1", status: "FT" },
  { id: 18, stage: "Group I", teams: "Iraq vs Norway", venue: "Foxborough, USA", kickoff: "2026-06-16T18:00:00+01:00", score: "1-4", status: "FT" },

  // ---- Wednesday 17 June ----
  { id: 19, stage: "Group J", teams: "Argentina vs Algeria", venue: "Kansas City, USA", kickoff: "2026-06-17T20:00:00+01:00", score: "3-0", status: "FT" },
  { id: 20, stage: "Group J", teams: "Austria vs Jordan", venue: "Santa Clara, USA", kickoff: "2026-06-17T17:00:00+01:00", score: "3-1", status: "FT" },
  { id: 21, stage: "Group K", teams: "Portugal vs DR Congo", venue: "Houston, USA", kickoff: "2026-06-17T17:00:00+01:00", score: "1-1", status: "FT" },
  { id: 22, stage: "Group L", teams: "England vs Croatia", venue: "Dallas, USA", kickoff: "2026-06-17T21:00:00+01:00", score: "4-2", status: "FT" },

  // ---- Thursday 18 June (TODAY) ----
  { id: 23, stage: "Group L", teams: "Ghana vs Panama", venue: "Toronto, Canada", kickoff: "2026-06-18T17:00:00+01:00", score: "1-0", status: "FT" },
  { id: 24, stage: "Group K", teams: "Uzbekistan vs Colombia", venue: "Mexico City, Mexico", kickoff: "2026-06-18T20:00:00+01:00", score: "1-3", status: "FT" },
  { id: 25, stage: "Group A", teams: "Czech Republic vs South Africa", venue: "Atlanta, USA", kickoff: "2026-06-18T17:00:00+01:00", score: "1-1", status: "FT" },
  { id: 26, stage: "Group B", teams: "Switzerland vs Bosnia-Herzegovina", venue: "Los Angeles, USA", kickoff: "2026-06-18T20:00:00+01:00", score: null, status: "scheduled" },
  { id: 27, stage: "Group B", teams: "Canada vs Qatar", venue: "Vancouver, Canada", kickoff: "2026-06-18T23:00:00+01:00", score: null, status: "scheduled" },

  // ---- Friday 19 June ----
  { id: 28, stage: "Group A", teams: "Mexico vs South Korea", venue: "Zapopan, Mexico", kickoff: "2026-06-19T02:00:00+01:00", score: null, status: "scheduled" },
  { id: 29, stage: "Group D", teams: "USA vs Australia", venue: "Seattle, USA", kickoff: "2026-06-19T20:00:00+01:00", score: null, status: "scheduled" },
  { id: 30, stage: "Group C", teams: "Scotland vs Morocco", venue: "Foxborough, USA", kickoff: "2026-06-19T23:00:00+01:00", score: null, status: "scheduled" },

  // ---- Saturday 20 June ----
  { id: 31, stage: "Group C", teams: "Brazil vs Haiti", venue: "Philadelphia, USA", kickoff: "2026-06-20T01:30:00+01:00", score: null, status: "scheduled" },
  { id: 32, stage: "Group D", teams: "Turkey vs Paraguay", venue: "Santa Clara, USA", kickoff: "2026-06-20T04:00:00+01:00", score: null, status: "scheduled" },
  { id: 33, stage: "Group F", teams: "Netherlands vs Sweden", venue: "Houston, USA", kickoff: "2026-06-20T18:00:00+01:00", score: null, status: "scheduled" },
  { id: 34, stage: "Group E", teams: "Germany vs Ivory Coast", venue: "Toronto, Canada", kickoff: "2026-06-20T21:00:00+01:00", score: null, status: "scheduled" },

  // ---- Sunday 21 June ----
  { id: 35, stage: "Group E", teams: "Ecuador vs Curacao", venue: "Kansas City, USA", kickoff: "2026-06-21T01:00:00+01:00", score: null, status: "scheduled" },
  { id: 36, stage: "Group F", teams: "Tunisia vs Japan", venue: "Guadalupe, Mexico", kickoff: "2026-06-21T05:00:00+01:00", score: null, status: "scheduled" },
  { id: 37, stage: "Group H", teams: "Spain vs Saudi Arabia", venue: "Atlanta, USA", kickoff: "2026-06-21T17:00:00+01:00", score: null, status: "scheduled" },
  { id: 38, stage: "Group G", teams: "Belgium vs Iran", venue: "Los Angeles, USA", kickoff: "2026-06-21T20:00:00+01:00", score: null, status: "scheduled" },
  { id: 39, stage: "Group H", teams: "Uruguay vs Cape Verde", venue: "Miami, USA", kickoff: "2026-06-21T23:00:00+01:00", score: null, status: "scheduled" },

  // ---- Monday 22 June ----
  { id: 40, stage: "Group G", teams: "New Zealand vs Egypt", venue: "Vancouver, Canada", kickoff: "2026-06-22T02:00:00+01:00", score: null, status: "scheduled" },
  { id: 41, stage: "Group J", teams: "Argentina vs Austria", venue: "Arlington, USA", kickoff: "2026-06-22T18:00:00+01:00", score: null, status: "scheduled" },
  { id: 42, stage: "Group I", teams: "France vs Iraq", venue: "Philadelphia, USA", kickoff: "2026-06-22T22:00:00+01:00", score: null, status: "scheduled" },

  // ---- Tuesday 23 June ----
  { id: 43, stage: "Group I", teams: "Norway vs Senegal", venue: "Toronto, Canada", kickoff: "2026-06-23T01:00:00+01:00", score: null, status: "scheduled" },
  { id: 44, stage: "Group J", teams: "Jordan vs Algeria", venue: "Santa Clara, USA", kickoff: "2026-06-23T04:00:00+01:00", score: null, status: "scheduled" },
  { id: 45, stage: "Group K", teams: "Portugal vs Uzbekistan", venue: "Houston, USA", kickoff: "2026-06-23T18:00:00+01:00", score: null, status: "scheduled" },
  { id: 46, stage: "Group L", teams: "England vs Ghana", venue: "Foxborough, USA", kickoff: "2026-06-23T21:00:00+01:00", score: null, status: "scheduled" },

  // ---- Wednesday 24 June ----
  { id: 47, stage: "Group L", teams: "Panama vs Croatia", venue: "Foxborough, USA", kickoff: "2026-06-24T00:00:00+01:00", score: null, status: "scheduled" },
  { id: 48, stage: "Group K", teams: "Colombia vs DR Congo", venue: "Zapopan, Mexico", kickoff: "2026-06-24T03:00:00+01:00", score: null, status: "scheduled" },
  { id: 49, stage: "Group B", teams: "Switzerland vs Canada", venue: "Vancouver, Canada", kickoff: "2026-06-24T20:00:00+01:00", score: null, status: "scheduled" },
  { id: 50, stage: "Group B", teams: "Bosnia-Herzegovina vs Qatar", venue: "Seattle, USA", kickoff: "2026-06-24T20:00:00+01:00", score: null, status: "scheduled" },
  { id: 51, stage: "Group C", teams: "Morocco vs Haiti", venue: "Atlanta, USA", kickoff: "2026-06-24T23:00:00+01:00", score: null, status: "scheduled" },
  { id: 52, stage: "Group C", teams: "Scotland vs Brazil", venue: "Miami, USA", kickoff: "2026-06-24T23:00:00+01:00", score: null, status: "scheduled" },

  // ---- Thursday 25 June ----
  { id: 53, stage: "Group A", teams: "South Africa vs South Korea", venue: "Guadalupe, Mexico", kickoff: "2026-06-25T02:00:00+01:00", score: null, status: "scheduled" },
  { id: 54, stage: "Group A", teams: "Czech Republic vs Mexico", venue: "Mexico City, Mexico", kickoff: "2026-06-25T02:00:00+01:00", score: null, status: "scheduled" },
  { id: 55, stage: "Group E", teams: "Curacao vs Ivory Coast", venue: "Philadelphia, USA", kickoff: "2026-06-25T21:00:00+01:00", score: null, status: "scheduled" },
  { id: 56, stage: "Group E", teams: "Ecuador vs Germany", venue: "New Jersey, USA", kickoff: "2026-06-25T21:00:00+01:00", score: null, status: "scheduled" },

  // ---- Friday 26 June ----
  { id: 57, stage: "Group F", teams: "Tunisia vs Netherlands", venue: "Kansas City, USA", kickoff: "2026-06-26T00:00:00+01:00", score: null, status: "scheduled" },
  { id: 58, stage: "Group F", teams: "Japan vs Sweden", venue: "Arlington, USA", kickoff: "2026-06-26T00:00:00+01:00", score: null, status: "scheduled" },
  { id: 59, stage: "Group D", teams: "Turkey vs USA", venue: "Los Angeles, USA", kickoff: "2026-06-26T03:00:00+01:00", score: null, status: "scheduled" },
  { id: 60, stage: "Group D", teams: "Paraguay vs Australia", venue: "Santa Clara, USA", kickoff: "2026-06-26T03:00:00+01:00", score: null, status: "scheduled" },
  { id: 61, stage: "Group I", teams: "Norway vs France", venue: "Foxborough, USA", kickoff: "2026-06-26T20:00:00+01:00", score: null, status: "scheduled" },
  { id: 62, stage: "Group I", teams: "Senegal vs Iraq", venue: "Toronto, Canada", kickoff: "2026-06-26T20:00:00+01:00", score: null, status: "scheduled" },

  // ---- Saturday 27 June ----
  { id: 63, stage: "Group H", teams: "Cape Verde vs Saudi Arabia", venue: "Houston, USA", kickoff: "2026-06-27T01:00:00+01:00", score: null, status: "scheduled" },
  { id: 64, stage: "Group H", teams: "Uruguay vs Spain", venue: "Zapopan, Mexico", kickoff: "2026-06-27T01:00:00+01:00", score: null, status: "scheduled" },
  { id: 65, stage: "Group G", teams: "New Zealand vs Belgium", venue: "Vancouver, Canada", kickoff: "2026-06-27T04:00:00+01:00", score: null, status: "scheduled" },
  { id: 66, stage: "Group G", teams: "Egypt vs Iran", venue: "Seattle, USA", kickoff: "2026-06-27T04:00:00+01:00", score: null, status: "scheduled" },
  { id: 67, stage: "Group L", teams: "Panama vs England", venue: "New Jersey, USA", kickoff: "2026-06-27T22:00:00+01:00", score: null, status: "scheduled" },
  { id: 68, stage: "Group L", teams: "Croatia vs Ghana", venue: "Philadelphia, USA", kickoff: "2026-06-27T22:00:00+01:00", score: null, status: "scheduled" },

  // ---- Sunday 28 June ----
  { id: 69, stage: "Group K", teams: "Colombia vs Portugal", venue: "Miami, USA", kickoff: "2026-06-28T00:30:00+01:00", score: null, status: "scheduled" },
  { id: 70, stage: "Group K", teams: "DR Congo vs Uzbekistan", venue: "Atlanta, USA", kickoff: "2026-06-28T00:30:00+01:00", score: null, status: "scheduled" },
  { id: 71, stage: "Group J", teams: "Algeria vs Austria", venue: "Kansas City, USA", kickoff: "2026-06-28T03:00:00+01:00", score: null, status: "scheduled" },
  { id: 72, stage: "Group J", teams: "Jordan vs Argentina", venue: "Arlington, USA", kickoff: "2026-06-28T03:00:00+01:00", score: null, status: "scheduled" },
  { id: 73, stage: "Round of 32", teams: "Match 73: Group A R-up vs Group B R-up", venue: "Los Angeles, USA", kickoff: "2026-06-28T20:00:00+01:00", score: null, status: "scheduled" },

  // ---- Monday 29 June ----
  { id: 76, stage: "Round of 32", teams: "Match 76: Group C Winner vs Group F R-up", venue: "Houston, USA", kickoff: "2026-06-29T18:00:00+01:00", score: null, status: "scheduled" },
  { id: 74, stage: "Round of 32", teams: "Match 74: Group E Winner vs Best 3rd (A/B/C/D/F)", venue: "Foxborough, USA", kickoff: "2026-06-29T21:30:00+01:00", score: null, status: "scheduled" },

  // ---- Tuesday 30 June ----
  { id: 75, stage: "Round of 32", teams: "Match 75: Group F Winner vs Group C R-up", venue: "Guadalupe, Mexico", kickoff: "2026-06-30T02:00:00+01:00", score: null, status: "scheduled" },
  { id: 78, stage: "Round of 32", teams: "Match 78: Group E R-up vs Group I R-up", venue: "Arlington, USA", kickoff: "2026-06-30T18:00:00+01:00", score: null, status: "scheduled" },
  { id: 77, stage: "Round of 32", teams: "Match 77: Group I Winner vs Best 3rd (C/D/F/G/H)", venue: "New Jersey, USA", kickoff: "2026-06-30T22:00:00+01:00", score: null, status: "scheduled" },

  // ---- Wednesday 1 July ----
  { id: 79, stage: "Round of 32", teams: "Match 79: Group A Winner vs Best 3rd (C/E/F/H/I)", venue: "Mexico City, Mexico", kickoff: "2026-07-01T02:00:00+01:00", score: null, status: "scheduled" },
  { id: 80, stage: "Round of 32", teams: "Match 80: Group L Winner vs Best 3rd (E/H/I/J/K)", venue: "Atlanta, USA", kickoff: "2026-07-01T17:00:00+01:00", score: null, status: "scheduled" },
  { id: 82, stage: "Round of 32", teams: "Match 82: Group G Winner vs Best 3rd (A/E/H/I/J)", venue: "Seattle, USA", kickoff: "2026-07-01T21:00:00+01:00", score: null, status: "scheduled" },

  // ---- Thursday 2 July ----
  { id: 81, stage: "Round of 32", teams: "Match 81: Group D Winner vs Best 3rd (B/E/F/I/J)", venue: "Santa Clara, USA", kickoff: "2026-07-02T01:00:00+01:00", score: null, status: "scheduled" },
  { id: 84, stage: "Round of 32", teams: "Match 84: Group H Winner vs Group J R-up", venue: "Los Angeles, USA", kickoff: "2026-07-02T20:00:00+01:00", score: null, status: "scheduled" },

  // ---- Friday 3 July ----
  { id: 83, stage: "Round of 32", teams: "Match 83: Group K R-up vs Group L R-up", venue: "Toronto, Canada", kickoff: "2026-07-03T00:00:00+01:00", score: null, status: "scheduled" },
  { id: 85, stage: "Round of 32", teams: "Match 85: Group B Winner vs Best 3rd (E/F/G/I/J)", venue: "Vancouver, Canada", kickoff: "2026-07-03T04:00:00+01:00", score: null, status: "scheduled" },
  { id: 88, stage: "Round of 32", teams: "Match 88: Group D R-up vs Group G R-up", venue: "Arlington, USA", kickoff: "2026-07-03T19:00:00+01:00", score: null, status: "scheduled" },
  { id: 86, stage: "Round of 32", teams: "Match 86: Group J Winner vs Group H R-up", venue: "Miami, USA", kickoff: "2026-07-03T23:00:00+01:00", score: null, status: "scheduled" },

  // ---- Saturday 4 July ----
  { id: 87, stage: "Round of 32", teams: "Match 87: Group K Winner vs Best 3rd (D/E/I/J/L)", venue: "Kansas City, USA", kickoff: "2026-07-04T02:30:00+01:00", score: null, status: "scheduled" },
  { id: 90, stage: "Round of 16", teams: "Match 90: Winner M73 vs Winner M75", venue: "Houston, USA", kickoff: "2026-07-04T18:00:00+01:00", score: null, status: "scheduled" },
  { id: 89, stage: "Round of 16", teams: "Match 89: Winner M74 vs Winner M77", venue: "Philadelphia, USA", kickoff: "2026-07-04T22:00:00+01:00", score: null, status: "scheduled" },

  // ---- Sunday 5 July ----
  { id: 91, stage: "Round of 16", teams: "Match 91: Winner M76 vs Winner M78", venue: "New Jersey, USA", kickoff: "2026-07-05T21:00:00+01:00", score: null, status: "scheduled" },

  // ---- Monday 6 July ----
  { id: 92, stage: "Round of 16", teams: "Match 92: Winner M79 vs Winner M80", venue: "Mexico City, Mexico", kickoff: "2026-07-06T01:00:00+01:00", score: null, status: "scheduled" },
  { id: 93, stage: "Round of 16", teams: "Match 93: Winner M83 vs Winner M84", venue: "Arlington, USA", kickoff: "2026-07-06T20:00:00+01:00", score: null, status: "scheduled" },

  // ---- Tuesday 7 July ----
  { id: 94, stage: "Round of 16", teams: "Match 94: Winner M81 vs Winner M82", venue: "Seattle, USA", kickoff: "2026-07-07T01:00:00+01:00", score: null, status: "scheduled" },
  { id: 95, stage: "Round of 16", teams: "Match 95: Winner M86 vs Winner M88", venue: "Atlanta, USA", kickoff: "2026-07-07T17:00:00+01:00", score: null, status: "scheduled" },
  { id: 96, stage: "Round of 16", teams: "Match 96: Winner M85 vs Winner M87", venue: "Vancouver, Canada", kickoff: "2026-07-07T21:00:00+01:00", score: null, status: "scheduled" },

  // ---- Thursday 9 July ----
  { id: 97, stage: "Quarter-final", teams: "Match 97: Winner M89 vs Winner M90", venue: "Foxborough, USA", kickoff: "2026-07-09T21:00:00+01:00", score: null, status: "scheduled" },

  // ---- Friday 10 July ----
  { id: 98, stage: "Quarter-final", teams: "Match 98: Winner M93 vs Winner M94", venue: "Los Angeles, USA", kickoff: "2026-07-10T20:00:00+01:00", score: null, status: "scheduled" },

  // ---- Saturday 11 July ----
  { id: 99, stage: "Quarter-final", teams: "Match 99: Winner M91 vs Winner M92", venue: "Miami, USA", kickoff: "2026-07-11T22:00:00+01:00", score: null, status: "scheduled" },

  // ---- Sunday 12 July ----
  { id: 100, stage: "Quarter-final", teams: "Match 100: Winner M95 vs Winner M96", venue: "Kansas City, USA", kickoff: "2026-07-12T02:00:00+01:00", score: null, status: "scheduled" },

  // ---- Tuesday 14 July ----
  { id: 101, stage: "Semi-final", teams: "Match 101: Winner M97 vs Winner M98", venue: "Arlington, USA", kickoff: "2026-07-14T20:00:00+01:00", score: null, status: "scheduled" },

  // ---- Wednesday 15 July ----
  { id: 102, stage: "Semi-final", teams: "Match 102: Winner M99 vs Winner M100", venue: "Atlanta, USA", kickoff: "2026-07-15T20:00:00+01:00", score: null, status: "scheduled" },

  // ---- Saturday 18 July ----
  { id: 103, stage: "Third Place Play-off", teams: "Match 103: Loser M101 vs Loser M102", venue: "Miami, USA", kickoff: "2026-07-18T22:00:00+01:00", score: null, status: "scheduled" },

  // ---- Sunday 19 July ----
  { id: 104, stage: "Final", teams: "Match 104: Winner M101 vs Winner M102", venue: "New Jersey, USA", kickoff: "2026-07-19T20:00:00+01:00", score: null, status: "scheduled" },
];
