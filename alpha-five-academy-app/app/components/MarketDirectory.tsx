"use client";

export default function MarketDirectory() {
  const activeMarkets = [
    {
      id: 1,
      name: "Bombay Stock Exchange (BSE)",
      established: 1875,
      location: "Mumbai",
      index: "Sensex",
      significance: "Oldest stock exchange in Asia",
      companiesListed: "5,000+",
      website: "bseindia.com",
    },
    {
      id: 2,
      name: "National Stock Exchange (NSE)",
      established: 1992,
      location: "Mumbai",
      index: "NIFTY 50",
      significance: "Largest stock exchange in India by trading volume",
      companiesListed: "2,000+",
      website: "nseindia.com",
      specialty: "Electronic trading system",
    },
    {
      id: 3,
      name: "Metropolitan Stock Exchange of India (MSEI)",
      established: 2008,
      location: "Mumbai",
      index: "SX40",
      significance: "Recognized stock exchange, but very low trading activity",
      website: "msei.in",
    },
  ];

  const ifscExchanges = [
    {
      id: 4,
      name: "NSE IFSC",
      location: "GIFT City, Gujarat",
      description: "Allows international trading in foreign currency",
      specialty: "Focus on global investors",
    },
    {
      id: 5,
      name: "BSE IFSC",
      location: "GIFT City, Gujarat",
      description: "International arm of BSE",
      specialty: "Trades global financial instruments",
    },
  ];

  const closedExchanges = [
    "Calcutta Stock Exchange",
    "Madras Stock Exchange",
    "Delhi Stock Exchange",
    "Ahmedabad Stock Exchange",
  ];

  const nseIndices = {
    broadMarket: [
      "NIFTY 50 – Top 50 large companies",
      "NIFTY Next 50 – Next 50 companies after NIFTY 50",
      "NIFTY 100 – Top 100 companies",
      "NIFTY 200",
      "NIFTY 500 – Represents overall market",
    ],
    marketCap: [
      "NIFTY LargeCap 100",
      "NIFTY Midcap 100",
      "NIFTY Smallcap 100",
      "NIFTY Midcap 150",
      "NIFTY Smallcap 250",
      "NIFTY Microcap 250",
    ],
    sectoral: [
      "NIFTY Bank",
      "NIFTY IT",
      "NIFTY Pharma",
      "NIFTY FMCG",
      "NIFTY Metal",
      "NIFTY Auto",
      "NIFTY Realty",
      "NIFTY Energy",
      "NIFTY Healthcare",
    ],
    thematic: [
      "NIFTY PSU Bank",
      "NIFTY Private Bank",
      "NIFTY Infrastructure",
      "NIFTY Consumption",
      "NIFTY India Digital",
      "NIFTY Manufacturing",
    ],
    volatility: "India VIX",
  };

  const bseIndices = {
    broadMarket: ["SENSEX – Top 30 companies", "BSE 100", "BSE 200", "BSE 500"],
    marketCap: ["BSE LargeCap", "BSE MidCap", "BSE SmallCap"],
    sectoral: [
      "BSE Bankex",
      "BSE IT",
      "BSE FMCG",
      "BSE Auto",
      "BSE Metal",
      "BSE Oil & Gas",
      "BSE Healthcare",
      "BSE Realty",
    ],
  };

  const basicTerms = {
    "Stock Market Basics": [
      {
        term: "Stock (Share)",
        definition: "A unit of ownership in a company.",
      },
      {
        term: "Shareholder",
        definition: "A person or entity that owns shares in a company.",
      },
      {
        term: "Equity",
        definition: "Ownership interest in a company (another word for stock).",
      },
      {
        term: "Market",
        definition: "A place where buyers and sellers trade financial assets.",
      },
    ],
    "Stock Market & Exchanges": [
      {
        term: "Stock Market",
        definition: "A system where stocks are bought and sold.",
      },
      {
        term: "Stock Exchange",
        definition:
          "An organized marketplace for trading stocks (e.g., NYSE, NASDAQ).",
      },
      {
        term: "IPO (Initial Public Offering)",
        definition:
          "When a company sells its shares to the public for the first time.",
      },
      {
        term: "Listed Company",
        definition: "A company whose shares trade on a stock exchange.",
      },
    ],
    "Trading & Price Terms": [
      {
        term: "Bid Price",
        definition: "The highest price a buyer is willing to pay.",
      },
      {
        term: "Ask Price",
        definition: "The lowest price a seller is willing to accept.",
      },
      {
        term: "Market Price",
        definition: "The current price at which a stock is trading.",
      },
      {
        term: "Volume",
        definition: "Number of shares traded in a given period.",
      },
      {
        term: "Liquidity",
        definition: "How easily a stock can be bought or sold.",
      },
    ],
    "Investment Performance": [
      { term: "Bull Market", definition: "A market where prices are rising." },
      { term: "Bear Market", definition: "A market where prices are falling." },
      { term: "Volatility", definition: "Degree of price fluctuation." },
      { term: "Return", definition: "Profit or loss from an investment." },
      {
        term: "Dividend",
        definition: "A portion of company profits paid to shareholders.",
      },
    ],
    "Financial Metrics": [
      {
        term: "Market Capitalization",
        definition:
          "Total value of a company's shares (Share Price × Total Shares).",
      },
      { term: "Earnings", definition: "Company's profit." },
      {
        term: "P/E Ratio (Price-to-Earnings)",
        definition: "Stock price divided by earnings per share.",
      },
      {
        term: "EPS (Earnings Per Share)",
        definition: "Profit allocated to each share.",
      },
    ],
    "Risk & Strategy": [
      {
        term: "Diversification",
        definition: "Spreading investments to reduce risk.",
      },
      {
        term: "Portfolio",
        definition:
          "Collection of investments owned by an individual or institution.",
      },
      {
        term: "Risk",
        definition: "Chance of losing money or earning less than expected.",
      },
      {
        term: "Long Position",
        definition: "Buying a stock expecting its price to rise.",
      },
      {
        term: "Short Selling",
        definition:
          "Selling borrowed stock hoping to buy it back at a lower price.",
      },
    ],
  };

  const glossaryTerms = [
    {
      letter: "A",
      terms: [
        {
          term: "Ask Price",
          definition: "Lowest price a seller is willing to accept.",
        },
        {
          term: "Asset",
          definition: "Anything of value owned by a company or individual.",
        },
        {
          term: "Average Volume",
          definition: "Average number of shares traded over a period.",
        },
      ],
    },
    {
      letter: "B",
      terms: [
        {
          term: "Bear Market",
          definition: "Period when stock prices fall consistently.",
        },
        {
          term: "Bid Price",
          definition: "Highest price a buyer is willing to pay.",
        },
        {
          term: "Blue-Chip Stock",
          definition: "Shares of large, stable, well-known companies.",
        },
        {
          term: "Broker",
          definition:
            "An intermediary who buys and sells stocks for investors.",
        },
        { term: "Bull Market", definition: "Period when stock prices rise." },
      ],
    },
    {
      letter: "C",
      terms: [
        {
          term: "Capital Gain",
          definition: "Profit from selling a stock at a higher price.",
        },
        {
          term: "Capital Loss",
          definition: "Loss from selling a stock at a lower price.",
        },
        {
          term: "Circuit Breaker",
          definition: "Temporary halt in trading to prevent panic selling.",
        },
        {
          term: "Correction",
          definition: "A decline of about 10% from recent highs.",
        },
      ],
    },
    {
      letter: "D",
      terms: [
        {
          term: "Day Trading",
          definition: "Buying and selling stocks within the same day.",
        },
        {
          term: "Dividend",
          definition: "Portion of profits paid to shareholders.",
        },
        {
          term: "Diversification",
          definition: "Investing in different assets to reduce risk.",
        },
      ],
    },
    {
      letter: "E",
      terms: [
        { term: "Earnings", definition: "Company's profit." },
        {
          term: "EPS (Earnings Per Share)",
          definition: "Profit per outstanding share.",
        },
        { term: "Equity", definition: "Ownership in a company." },
      ],
    },
    {
      letter: "F",
      terms: [
        {
          term: "Face Value",
          definition: "Original value of a share set by the company.",
        },
        {
          term: "Fundamental Analysis",
          definition: "Evaluating a company using financial data.",
        },
      ],
    },
    {
      letter: "H",
      terms: [
        {
          term: "Hedge",
          definition: "Investment made to reduce potential losses.",
        },
        { term: "High Volume", definition: "Large number of shares traded." },
      ],
    },
    {
      letter: "I",
      terms: [
        {
          term: "Index",
          definition:
            "A group of stocks representing a market (e.g., S&P 500).",
        },
        {
          term: "IPO (Initial Public Offering)",
          definition: "First sale of shares to the public.",
        },
      ],
    },
    {
      letter: "L",
      terms: [
        { term: "Liquidity", definition: "Ease of buying or selling a stock." },
        { term: "Lot Size", definition: "Minimum number of shares per trade." },
      ],
    },
    {
      letter: "M",
      terms: [
        {
          term: "Market Capitalization",
          definition: "Total value of a company's shares.",
        },
        {
          term: "Market Order",
          definition: "Buy or sell at current market price.",
        },
        {
          term: "Mutual Fund",
          definition: "Investment pool managed by professionals.",
        },
      ],
    },
    {
      letter: "N",
      terms: [
        {
          term: "NAV (Net Asset Value)",
          definition: "Value of a mutual fund per unit.",
        },
      ],
    },
    {
      letter: "O",
      terms: [
        { term: "Order", definition: "Instruction to buy or sell a stock." },
        {
          term: "Overvalued",
          definition: "Stock priced higher than its true value.",
        },
      ],
    },
    {
      letter: "P",
      terms: [
        { term: "P/E Ratio", definition: "Price-to-earnings ratio." },
        { term: "Portfolio", definition: "Collection of investments." },
        { term: "Price Action", definition: "Movement of stock price." },
      ],
    },
    {
      letter: "R",
      terms: [
        {
          term: "Resistance",
          definition: "Price level where stock struggles to rise.",
        },
        { term: "Risk", definition: "Possibility of loss." },
        { term: "Return", definition: "Gain or loss from investment." },
      ],
    },
    {
      letter: "S",
      terms: [
        {
          term: "Support",
          definition: "Price level where stock tends to stop falling.",
        },
        { term: "Stop Loss", definition: "Order to limit losses." },
        {
          term: "Short Selling",
          definition: "Selling borrowed shares to profit from price decline.",
        },
      ],
    },
    {
      letter: "T",
      terms: [
        {
          term: "Technical Analysis",
          definition: "Studying price charts and indicators.",
        },
        {
          term: "Trend",
          definition: "General direction of the market or stock.",
        },
      ],
    },
    {
      letter: "V",
      terms: [
        { term: "Volatility", definition: "Degree of price fluctuation." },
        { term: "Volume", definition: "Number of shares traded." },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-5">
      <div className="max-w-[1400px] mx-auto">
        {/* Page Header */}
        <div className="text-center mb-20 sm:mb-24">
          <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-[#1a4d6d] mb-6 leading-tight">
            Market A-Z
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Complete guide to Indian stock exchanges, indices, and market
            terminology
          </p>
        </div>

        {/* Active Markets Section */}
        <section className="pt-5 mb-20 sm:mb-24 scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4d6d] mb-10 sm:mb-12 pb-4">
            Active Stock Exchanges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {activeMarkets.map((market) => (
              <div
                key={market.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="bg-linear-to-r from-[#1a4d6d] to-[#2b6b93] text-white p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {market.name}
                  </h3>
                  <p className="text-sm opacity-90">
                    Est. {market.established}
                  </p>
                </div>
                <div className="p-2.5 pl-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase">
                      Location
                    </p>
                    <p className="text-gray-800">{market.location}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase">
                      Primary Index
                    </p>
                    <p className="font-bold text-[#1a4d6d]">{market.index}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase">
                      Significance
                    </p>
                    <p className="text-sm text-gray-700">
                      {market.significance}
                    </p>
                  </div>
                  {market.companiesListed && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase">
                        Listed Companies
                      </p>
                      <p className="text-lg font-bold text-[#1a4d6d]">
                        {market.companiesListed}
                      </p>
                    </div>
                  )}
                  {market.specialty && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase">
                        Specialty
                      </p>
                      <p className="text-sm text-gray-700">
                        {market.specialty}
                      </p>
                    </div>
                  )}
                  <div className="pt-3 border-t border-gray-200">
                    <a
                      href={`https://${market.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a4d6d] font-semibold hover:text-[#f59e0b] transition-colors text-sm"
                    >
                      {market.website} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IFSC Exchanges Section */}
        <section className="pt-5 mb-20 sm:mb-24 scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4d6d] mb-10 sm:mb-12 pb-4">
            International Financial Services Centre (IFSC) Exchanges
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            Located at GIFT City, Gujarat - For international trading
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {ifscExchanges.map((exchange) => (
              <div
                key={exchange.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-2.5 pl-5"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1a4d6d] mb-6">
                  {exchange.name}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase">
                      Location
                    </p>
                    <p className="text-gray-800">{exchange.location}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase">
                      Description
                    </p>
                    <p className="text-gray-700">{exchange.description}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 uppercase">
                      Focus
                    </p>
                    <p className="text-gray-700">{exchange.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closed Exchanges Section */}
        <section className="pt-5 mb-20 sm:mb-24 scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4d6d] mb-10 sm:mb-12 pb-4">
            Former / Closed Stock Exchanges
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            These exchanges are no longer operational:
          </p>
          <div className="bg-white rounded-xl shadow-lg p-2.5 pl-5">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {closedExchanges.map((exchange, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="text-gray-400 mr-3">•</span>
                  {exchange}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* NSE Indices Section */}
        <section className="pt-5 mb-20 sm:mb-24 scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4d6d] mb-10 sm:mb-12 pb-4">
            NSE (National Stock Exchange) Indices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Broad Market */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#1a4d6d] mb-4">
                Broad Market Indices
              </h3>
              <ul className="space-y-2">
                {nseIndices.broadMarket.map((idx, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <span className="text-[#f59e0b] mr-3">→</span>
                    <span>{idx}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Market Cap */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a4d6d] mb-6">
                Market Capitalization Indices
              </h3>
              <ul className="space-y-3">
                {nseIndices.marketCap.map((idx, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <span className="text-[#f59e0b] mr-3">→</span>
                    <span>{idx}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sectoral */}
            <div className="bg-white rounded-xl shadow-lg p-2.5 pl-5">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a4d6d] mb-6">
                Sectoral Indices
              </h3>
              <ul className="space-y-3">
                {nseIndices.sectoral.map((idx, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <span className="text-[#f59e0b] mr-3">→</span>
                    <span>{idx}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Thematic */}
            <div className="bg-white rounded-xl shadow-lg p-2.5 pl-5">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a4d6d] mb-6">
                Thematic Indices
              </h3>
              <ul className="space-y-3">
                {nseIndices.thematic.map((idx, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <span className="text-[#f59e0b] mr-3">→</span>
                    <span>{idx}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Volatility Index
                </h4>
                <p className="text-gray-700">{nseIndices.volatility}</p>
              </div>
            </div>
          </div>
        </section>

        {/* BSE Indices Section */}
        <section className="pt-5 mb-20 sm:mb-24 scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4d6d] mb-10 sm:mb-12 pb-4">
            BSE (Bombay Stock Exchange) Indices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Broad Market */}
            <div className="bg-white rounded-xl shadow-lg p-2.5 pl-5">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a4d6d] mb-6">
                Broad Market Indices
              </h3>
              <ul className="space-y-3">
                {bseIndices.broadMarket.map((idx, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <span className="text-[#f59e0b] mr-3">→</span>
                    <span>{idx}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Market Cap */}
            <div className="bg-white rounded-xl shadow-lg p-2.5 pl-5">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a4d6d] mb-6">
                Market Capitalization Indices
              </h3>
              <ul className="space-y-3">
                {bseIndices.marketCap.map((idx, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <span className="text-[#f59e0b] mr-3">→</span>
                    <span>{idx}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sectoral */}
            <div className="bg-white rounded-xl shadow-lg p-2.5 pl-5 md:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a4d6d] mb-6">
                Sectoral Indices
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bseIndices.sectoral.map((idx, i) => (
                  <p key={i} className="text-gray-700 flex items-start">
                    <span className="text-[#f59e0b] mr-3">→</span>
                    <span>{idx}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Basic Terms Section */}
        <section className="pt-5 mb-20 sm:mb-24 scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4d6d] mb-10 sm:mb-12 pb-4">
            Basic Stock Market Terms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {Object.entries(basicTerms).map(([category, terms]) => (
              <div
                key={category}
                className="bg-white rounded-xl shadow-lg p-2.5 pl-5"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a4d6d] mb-6">
                  {category}
                </h3>
                <div className="space-y-4">
                  {terms.map((item, i) => (
                    <div key={i}>
                      <p className="font-semibold text-gray-800 text-sm">
                        {item.term}
                      </p>
                      <p className="text-gray-600 text-sm">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Glossary Section */}
        <section className="pt-5 scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4d6d] mb-10 sm:mb-12 pb-4">
            Stock Market Glossary
          </h2>
          <div className="space-y-8">
            {glossaryTerms.map((letterGroup) => (
              <div
                key={letterGroup.letter}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-linear-to-r from-[#1a4d6d] to-[#2b6b93] text-white p-6 sm:p-8">
                  <h3 className="text-3xl sm:text-4xl font-bold">
                    {letterGroup.letter}
                  </h3>
                </div>
                <div className="p-2.5 pl-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {letterGroup.terms.map((item, i) => (
                      <div key={i} className="pl-4">
                        <p className="font-semibold text-gray-800">
                          {item.term}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {item.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
