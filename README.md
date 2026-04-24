# GeoPoint Frontend 🚀

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Status](https://img.shields.io/badge/status-active-success?style=for-the-badge)](https://github.com/4Chronosx/Geopoint-Frontend)

<div align="center">
	<br />
	<a href="https://github.com/4Chronosx/Geopoint-Frontend">
		<img src="public/geopoint.svg" alt="GeoPoint Logo" width="20%" height="20%">
	</a>
	<br />
	<p align="center">
		<br />
		A modern IP geolocation dashboard with authentication, interactive maps, and searchable history.
		<br />
		<br />
		<p align="center">
			<a href="https://github.com/4Chronosx/Geopoint-Frontend/commits/main"><img alt="Last commit" src="https://img.shields.io/github/last-commit/4Chronosx/Geopoint-Frontend?style=flat" /></a>
			<a href="https://github.com/4Chronosx/Geopoint-Frontend/issues"><img alt="Open issues" src="https://img.shields.io/github/issues/4Chronosx/Geopoint-Frontend?style=flat" /></a>
		</p>
		<a href="https://github.com/4Chronosx/Geopoint-Frontend/issues/new?labels=bug">Report Bug</a>
		&middot;
		<a href="https://github.com/4Chronosx/Geopoint-Frontend/issues/new?labels=enhancement">Request Feature</a>
	</p>
</div>

---

<details>
	<summary>Table of Contents</summary>
	<ol>
		<li>
			<a href="#-project-overview">🗺️ Project Overview</a>
			<ul>
				<li><a href="#-tech-stack">📚 Tech Stack</a></li>
			</ul>
		</li>
		<li>
			<a href="#-getting-started">💻 Getting Started</a>
			<ul>
				<li><a href="#-prerequisites">🔧 Prerequisites</a></li>
				<li><a href="#-installation">🛠️ Installation</a></li>
				<li><a href="#-running-the-application">▶️ Running</a></li>
			</ul>
		</li>
		<li><a href="#-documentation">📖 Documentation</a></li>
		<li><a href="#-contributing">📬 Contributing</a></li>
		<li><a href="#-license">⚖️ License</a></li>
	</ol>
</details>

---

## 🗺️ Project Overview

**GeoPoint Frontend** is a React + TypeScript web application designed to help users authenticate, inspect their current IP geolocation, and investigate any other IP address through a clean, map-first interface.

It provides a complete search workflow: query IPs, visualize results on a map, and manage search history with quick reload and bulk deletion actions.

### 💡 Why GeoPoint?

Many IP lookup tools are either too minimal for practical workflows or too cluttered for everyday use. GeoPoint balances usability and utility by combining authentication, geodata cards, map visualization, and history management in one streamlined dashboard.

- 🔹 **Secure Auth Flow:** Sign up, login, logout, and session-aware routing with protected pages.
- 🔹 **IP Geolocation Lookup:** Validate and search IPv4/IPv6 addresses with user-friendly toast feedback.
- 🔹 **Interactive Map Pinning:** Visualize searched coordinates using Leaflet-based maps.
- 🔹 **Search History Controls:** Load past entries, select multiple rows, and delete selected items in one action.

### 📚 Tech Stack

<p align="left">
	<a href="https://react.dev/"><img alt="React" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=0f172a&style=flat" /></a>
	<a href="https://www.typescriptlang.org/"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat" /></a>
	<a href="https://vite.dev/"><img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=flat" /></a>
	<a href="https://tailwindcss.com/"><img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat" /></a>
	<a href="https://reactrouter.com/"><img alt="React Router" src="https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white&style=flat" /></a>
	<a href="https://leafletjs.com/"><img alt="Leaflet" src="https://img.shields.io/badge/Leaflet-199900?logo=leaflet&logoColor=white&style=flat" /></a>
	<a href="https://tanstack.com/table/latest"><img alt="TanStack Table" src="https://img.shields.io/badge/TanStack_Table-FF4154?logo=reacttable&logoColor=white&style=flat" /></a>
</p>

---

## 📖 Documentation

Key references in this repository and companion backend repository:

- **Frontend requirements brief:** [`INSTRUCTIONS.md`](INSTRUCTIONS.md)
- **Frontend routing and deployment rewrites:** [`vercel.json`](vercel.json)
- **Frontend API client setup:** [`src/lib/api.ts`](src/lib/api.ts)
- **Backend API reference:** [`../Geopoint - Backend/README.md`](../Geopoint%20-%20Backend/README.md)

---

## 💻 Getting Started

Follow these steps to set up and run **GeoPoint Frontend** locally.

### 🔧 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)
- Running GeoPoint backend API (local or deployed)

### 🛠️ Installation

#### 1. Clone the Repository

```sh
git clone https://github.com/4Chronosx/Geopoint-Frontend.git
cd Geopoint-Frontend
```

#### 2. Install Dependencies

```sh
npm install
```

#### 3. Environment Setup

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:8000
```

Use your deployed backend URL instead when running against production.

### ▶️ Running the Application

```sh
npm run dev
```

The app will be available at `http://localhost:5173`.

---

### 🔎 Project Structure

```text
Geopoint - Frontend/
├── public/
│   └── geopoint.svg
├── src/
│   ├── components/            # Reusable UI and feature components
│   │   ├── search/            # Search history table components
│   │   └── ui/                # Shared UI primitives
│   ├── context/
│   │   └── AuthContext.tsx    # Auth state and actions
│   ├── pages/
│   │   ├── home/              # Geo dashboard page
│   │   ├── login/             # Login page
│   │   └── signup/            # Sign up page
│   ├── services/              # API service wrappers
│   ├── lib/                   # API utilities and helpers
│   ├── App.tsx                # Routes and guard logic
│   └── main.tsx               # App bootstrap
├── vercel.json                # Vercel rewrite config
└── package.json               # Scripts and dependencies
```

---

## 📬 Contributing

Contributions are welcome. If you have suggestions or improvements:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to your branch: `git push origin feature/amazing-feature`
5. Open a pull request.

---

## ⚖️ License

No license file is currently included in this repository. Add a `LICENSE` file if you want to define usage and distribution terms.

---

[contributors-shield]: https://img.shields.io/github/contributors/4Chronosx/Geopoint-Frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/4Chronosx/Geopoint-Frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/4Chronosx/Geopoint-Frontend.svg?style=for-the-badge
[forks-url]: https://github.com/4Chronosx/Geopoint-Frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/4Chronosx/Geopoint-Frontend.svg?style=for-the-badge
[stars-url]: https://github.com/4Chronosx/Geopoint-Frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/4Chronosx/Geopoint-Frontend.svg?style=for-the-badge
[issues-url]: https://github.com/4Chronosx/Geopoint-Frontend/issues
