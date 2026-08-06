"use client";

import { motion } from "framer-motion";
import { UndaSymbol } from "@/components/brand/unda-symbol";

const NODES = [
  { name: "Technologies", domain: "https://technologies.undasolutions.com", x: 200, y: 50 },
  { name: "Studio", domain: "https://studio.undasolutions.com", x: 330, y: 275 },
  { name: "Travel", domain: "https://travel.undasolutions.com", x: 70, y: 275 },
];

const CENTER = { x: 200, y: 200 };

/**
 * One parent, three connected businesses — per unda-design-os/brand-expression/manual/
 * 07-graphic-language.md (derive from logo geometry, not arbitrary decoration). Lines draw
 * in on scroll, nodes fade/scale in staggered after. Respects reduced motion via the global
 * MotionConfig in layout.tsx.
 */
export function EcosystemDiagram() {
  return (
    <svg
      viewBox="0 0 400 340"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="Unda Solutions connects Technologies, Studio, and Travel"
    >
      {NODES.map((node, i) => (
        <motion.line
          key={`line-${node.name}`}
          x1={CENTER.x}
          y1={CENTER.y}
          x2={node.x}
          y2={node.y}
          stroke="var(--brand-primary)"
          strokeWidth={1.5}
          strokeOpacity={0.35}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1], delay: i * 0.12 }}
        />
      ))}

      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.24, ease: [0, 0, 0.2, 1] }}
      >
        <circle cx={CENTER.x} cy={CENTER.y} r={40} className="fill-brand-primary" />
        <foreignObject x={CENTER.x - 16} y={CENTER.y - 16} width={32} height={32}>
          <UndaSymbol className="h-8 w-8 text-white" />
        </foreignObject>
        <text
          x={CENTER.x}
          y={CENTER.y + 56}
          textAnchor="middle"
          className="fill-text-primary font-display text-[13px] font-semibold"
        >
          Unda Solutions
        </text>
      </motion.g>

      {NODES.map((node, i) => (
        <motion.g
          key={node.name}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.18, ease: [0, 0, 0.2, 1], delay: 0.4 + i * 0.12 }}
        >
          <a href={node.domain} rel="noopener">
            <circle
              cx={node.x}
              cy={node.y}
              r={30}
              className="fill-bg-default stroke-brand-primary transition-[fill] duration-150 ease-out hover:fill-bg-subtle"
              strokeWidth={1.5}
            />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              className="fill-text-primary text-[11px] font-medium"
            >
              {node.name}
            </text>
          </a>
        </motion.g>
      ))}
    </svg>
  );
}
