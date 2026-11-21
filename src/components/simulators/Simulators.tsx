import React, { useState } from 'react';

export const NumberLineSim: React.FC = () => {
  const [val, setVal] = useState<number>(-3);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
          さわって体験：数直線スライダー
        </span>
        <span className="text-xs text-slate-500">スライダーを動かしてみよう</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200">
        {/* Number line SVG */}
        <div className="relative py-4">
          <svg viewBox="0 0 320 60" className="w-full h-16 overflow-visible select-none">
            {/* Main axis line */}
            <line x1="20" y1="35" x2="300" y2="35" stroke="#94a3b8" strokeWidth="2" />
            <polygon points="305,35 295,30 295,40" fill="#94a3b8" />
            <polygon points="15,35 25,30 25,40" fill="#94a3b8" />

            {/* Zero point / Origin */}
            <line x1="160" y1="23" x2="160" y2="47" stroke="#0284c7" strokeWidth="2.5" />
            <text x="160" y="58" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0284c7">0 (原点)</text>

            {/* Tick marks (-6 to +6) */}
            {[-6, -4, -2, 2, 4, 6].map((tick) => {
              const xPos = 160 + tick * 20;
              return (
                <g key={tick}>
                  <line x1={xPos} y1="30" x2={xPos} y2="40" stroke="#cbd5e1" strokeWidth="1.5" />
                  <text x={xPos} y="55" textAnchor="middle" fontSize="10" fill="#64748b">
                    {tick > 0 ? `+${tick}` : tick}
                  </text>
                </g>
              );
            })}

            {/* Distance bracket from 0 to current val */}
            {val !== 0 && (
              <g>
                <line
                  x1={160}
                  y1="16"
                  x2={160 + val * 20}
                  y2="16"
                  stroke={val > 0 ? '#0ea5e9' : '#f43f5e'}
                  strokeWidth="2.5"
                  strokeDasharray="3 3"
                />
                <circle cx={160} cy="16" r="3" fill="#64748b" />
                <circle cx={160 + val * 20} cy="16" r="3" fill={val > 0 ? '#0ea5e9' : '#f43f5e'} />
                <text
                  x={160 + (val * 20) / 2}
                  y="12"
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="bold"
                  fill={val > 0 ? '#0369a1' : '#be123c'}
                >
                  きょり(絶対値) = {Math.abs(val)}
                </text>
              </g>
            )}

            {/* Current Point Dot */}
            <circle
              cx={160 + val * 20}
              cy="35"
              r="7"
              fill={val > 0 ? '#0284c7' : val < 0 ? '#e11d48' : '#059669'}
              stroke="#ffffff"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Slider control */}
        <div className="mt-2 flex items-center gap-3">
          <button
            onClick={() => setVal((v) => Math.max(-6, v - 1))}
            className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-lg flex items-center justify-center transition active:scale-95"
            aria-label="1減らす"
          >
            -
          </button>
          <input
            type="range"
            min="-6"
            max="6"
            step="1"
            value={val}
            onChange={(e) => setVal(Number(e.target.value))}
            className="flex-1 accent-sky-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
          />
          <button
            onClick={() => setVal((v) => Math.min(6, v + 1))}
            className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-lg flex items-center justify-center transition active:scale-95"
            aria-label="1増やす"
          >
            +
          </button>
        </div>

        {/* Dynamic reading panel */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-center text-sm">
          <div className="p-2 bg-sky-50 rounded-lg border border-sky-100">
            <span className="text-xs text-slate-500 block">いまの点</span>
            <span className="text-base font-bold text-sky-800">
              {val > 0 ? `+${val}` : val === 0 ? '0 (基準)' : val}
            </span>
          </div>
          <div className="p-2 bg-rose-50 rounded-lg border border-rose-100">
            <span className="text-xs text-slate-500 block">絶対値 |{val > 0 ? `+${val}` : val}|</span>
            <span className="text-base font-bold text-rose-700">
              {Math.abs(val)} <span className="text-xs font-normal text-slate-600">（0からの長さ）</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TugOfWarSim: React.FC = () => {
  const [pos, setPos] = useState<number>(3);
  const [neg, setNeg] = useState<number>(5);

  const diff = pos - neg;
  const resultSign = diff > 0 ? '+' : diff < 0 ? '-' : '0';
  const resultVal = diff > 0 ? `+${diff}` : diff < 0 ? `${diff}` : '0（引き分け）';

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
          さわって体験：プラス軍 vs マイナス軍の綱引き
        </span>
        <span className="text-xs text-slate-500">人数を変えてみよう</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200">
        {/* Battle Arena */}
        <div className="flex items-center justify-between gap-3 mb-4">
          {/* Positive Team (Blue) */}
          <div className="flex-1 bg-sky-50 border border-sky-200 rounded-lg p-2.5 text-center">
            <span className="text-xs font-bold text-sky-800 block mb-1">
              🔵 プラス軍（+{pos}）
            </span>
            <div className="flex flex-wrap gap-1 justify-center min-h-[32px] items-center mb-2">
              {Array.from({ length: pos }).map((_, i) => (
                <span
                  key={i}
                  className="w-5 h-5 bg-sky-500 text-white rounded-full text-xs font-bold flex items-center justify-center shadow-xs"
                >
                  +
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setPos((p) => Math.max(0, p - 1))}
                className="w-8 h-8 rounded bg-white border border-sky-300 font-bold text-sky-700 active:scale-95"
              >
                -1
              </button>
              <button
                onClick={() => setPos((p) => Math.min(9, p + 1))}
                className="w-8 h-8 rounded bg-sky-600 text-white font-bold active:scale-95"
              >
                +1
              </button>
            </div>
          </div>

          <div className="text-slate-400 font-black text-sm">VS</div>

          {/* Negative Team (Red) */}
          <div className="flex-1 bg-rose-50 border border-rose-200 rounded-lg p-2.5 text-center">
            <span className="text-xs font-bold text-rose-800 block mb-1">
              🔴 マイナス軍（-{neg}）
            </span>
            <div className="flex flex-wrap gap-1 justify-center min-h-[32px] items-center mb-2">
              {Array.from({ length: neg }).map((_, i) => (
                <span
                  key={i}
                  className="w-5 h-5 bg-rose-500 text-white rounded-full text-xs font-bold flex items-center justify-center shadow-xs"
                >
                  -
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setNeg((n) => Math.max(0, n - 1))}
                className="w-8 h-8 rounded bg-white border border-rose-300 font-bold text-rose-700 active:scale-95"
              >
                -1
              </button>
              <button
                onClick={() => setNeg((n) => Math.min(9, n + 1))}
                className="w-8 h-8 rounded bg-rose-600 text-white font-bold active:scale-95"
              >
                +1
              </button>
            </div>
          </div>
        </div>

        {/* Rope result visualization */}
        <div className="p-3 bg-amber-50/80 rounded-lg border border-amber-200 text-center">
          <div className="text-xs text-amber-800 font-medium mb-1">
            綱引きの計算式： (+{pos}) + (-{neg})
          </div>
          <div className="text-lg font-bold text-slate-800">
            答え ＝ <span className={`text-xl ${diff > 0 ? 'text-sky-600' : diff < 0 ? 'text-rose-600' : 'text-slate-700'}`}>{resultVal}</span>
          </div>
          <div className="text-xs text-slate-600 mt-1">
            {diff > 0 && `プラス軍のほうが ${Math.abs(diff)}人 多いのでプラスの勝ち！`}
            {diff < 0 && `マイナス軍のほうが ${Math.abs(diff)}人 多いのでマイナスの勝ち！`}
            {diff === 0 && '人数が同じなのでピッタリつり合って 0！'}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SignMachineSim: React.FC = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(-3);
  const [isTransformed, setIsTransformed] = useState<boolean>(false);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
          さわって体験：ひき算の変身マシーン
        </span>
        <button
          onClick={() => {
            setB((prev) => (prev === -3 ? 4 : -3));
            setIsTransformed(false);
          }}
          className="text-xs text-purple-700 underline font-medium"
        >
          数を変える
        </button>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
        <div className="text-xs text-slate-500 mb-2">
          ひき算「ー」は「＋」に変身して、うしろの符号がくるっと逆になります！
        </div>

        {/* Formula State */}
        <div className="flex items-center justify-center gap-2 text-xl font-bold py-3 bg-purple-50/50 rounded-lg">
          <span>{a}</span>
          <span
            className={`transition-all duration-300 px-2 py-1 rounded ${
              isTransformed ? 'bg-amber-100 text-amber-700 scale-110' : 'text-rose-600'
            }`}
          >
            {isTransformed ? '+' : '-'}
          </span>
          <span
            className={`transition-all duration-300 px-2 py-1 rounded ${
              isTransformed ? 'bg-emerald-100 text-emerald-800 scale-110' : 'text-slate-700'
            }`}
          >
            {isTransformed ? `(${b > 0 ? -b : `+${-b}`})` : `(${b > 0 ? `+${b}` : b})`}
          </span>
          <span>=</span>
          <span className="text-2xl font-black text-purple-700">
            {isTransformed ? a - b : '?'}
          </span>
        </div>

        {/* Action Button */}
        <div className="mt-3">
          <button
            onClick={() => setIsTransformed(!isTransformed)}
            className={`w-full py-2.5 px-4 rounded-lg font-bold text-sm transition shadow-xs active:scale-98 ${
              isTransformed
                ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            {isTransformed ? '↺ もとの式に戻す' : '✨ 変身スイッチを押す！'}
          </button>
        </div>

        {isTransformed && (
          <p className="mt-2 text-xs text-emerald-700 font-medium">
            「ー」が「＋」に変わり、({b > 0 ? `+${b}` : b}) が ({b > 0 ? -b : `+${-b}`}) に反転！
            普通のたし算（綱引き）で解けます！
          </p>
        )}
      </div>
    </div>
  );
};

export const BalanceScaleSim: React.FC = () => {
  const [subtracted, setSubtracted] = useState<boolean>(false);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
          さわって体験：方程式のつり合い天秤
        </span>
        <span className="text-xs text-slate-500">等式の性質</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200">
        <div className="text-center text-xs text-slate-600 mb-2">
          方程式「x + 3 = 7」を天秤に乗せました。両側から同じ「3」を取ると…？
        </div>

        {/* Scale Illustration */}
        <div className="relative py-3">
          <div className="flex justify-between items-end px-6 max-w-sm mx-auto">
            {/* Left Pan */}
            <div className="text-center w-28">
              <div className="bg-sky-50 border border-sky-300 rounded-lg p-2 shadow-xs transition-all duration-300">
                <span className="block font-bold text-sky-800 text-sm">
                  {subtracted ? 'x だけ' : 'x と [3]'}
                </span>
                <div className="flex gap-1 justify-center mt-1">
                  <span className="w-6 h-6 bg-sky-500 text-white rounded font-bold text-xs flex items-center justify-center">
                    x
                  </span>
                  {!subtracted && (
                    <span className="w-6 h-6 bg-amber-400 text-white rounded font-bold text-xs flex items-center justify-center">
                      3
                    </span>
                  )}
                </div>
              </div>
              <div className="h-6 w-0.5 bg-slate-400 mx-auto"></div>
            </div>

            {/* Scale Center Pillar */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-slate-700 mb-0.5"></div>
              <div className="h-10 w-1.5 bg-slate-500 rounded"></div>
              <div className="w-16 h-2 bg-slate-600 rounded"></div>
            </div>

            {/* Right Pan */}
            <div className="text-center w-28">
              <div className="bg-amber-50 border border-amber-300 rounded-lg p-2 shadow-xs transition-all duration-300">
                <span className="block font-bold text-amber-800 text-sm">
                  {subtracted ? '4' : '7'}
                </span>
                <div className="flex gap-1 justify-center mt-1 flex-wrap">
                  {subtracted ? (
                    <span className="w-6 h-6 bg-emerald-500 text-white rounded font-bold text-xs flex items-center justify-center">
                      4
                    </span>
                  ) : (
                    <>
                      <span className="w-6 h-6 bg-emerald-500 text-white rounded font-bold text-xs flex items-center justify-center">
                        4
                      </span>
                      <span className="w-6 h-6 bg-amber-400 text-white rounded font-bold text-xs flex items-center justify-center">
                        3
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="h-6 w-0.5 bg-slate-400 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Action Toggle */}
        <div className="mt-2 text-center">
          <button
            onClick={() => setSubtracted(!subtracted)}
            className="py-2 px-4 rounded-lg bg-amber-600 text-white font-bold text-sm hover:bg-amber-700 active:scale-95 transition shadow-xs"
          >
            {subtracted ? '↺ もとに戻す' : '⚖️ 両辺から 3 を同時に引く！'}
          </button>
        </div>

        {subtracted && (
          <div className="mt-3 p-2 bg-emerald-50 rounded border border-emerald-200 text-center text-xs text-emerald-800 font-medium">
            両側から同じ3を取ったので天秤はつり合ったまま！ <strong>x = 4</strong> が残りました！
          </div>
        )}
      </div>
    </div>
  );
};

export const TransposeDemoSim: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
          さわって体験：移項（いこう）アニメーション
        </span>
        <button
          onClick={() => setStep(0)}
          className="text-xs text-amber-800 underline font-medium"
        >
          はじめから
        </button>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200">
        <div className="text-center font-mono text-base font-bold py-2 bg-slate-50 rounded border border-slate-100 mb-3">
          {step === 0 && (
            <span>
              2x <span className="bg-rose-100 text-rose-700 px-1 rounded">+ 5</span> = 13
            </span>
          )}
          {step === 1 && (
            <span>
              2x = 13 <span className="bg-emerald-100 text-emerald-700 px-1 rounded">- 5</span>
              <span className="text-xs text-slate-500 block font-sans">
                （＝をまたいだので +5 が -5 に反転！）
              </span>
            </span>
          )}
          {step === 2 && (
            <span>
              2x = 8 <span className="text-slate-400">→</span> x = 8 ÷ 2
            </span>
          )}
          {step === 3 && (
            <span className="text-emerald-700 text-lg">
              ✨ x = 4 （解が求まった！）
            </span>
          )}
        </div>

        <div className="flex gap-2 justify-center">
          <button
            onClick={() => setStep((s) => Math.min(3, s + 1))}
            disabled={step === 3}
            className="py-2 px-4 rounded-lg bg-amber-600 text-white font-bold text-sm hover:bg-amber-700 disabled:opacity-40 transition"
          >
            {step === 0 && '👉 +5 を右辺に移項する'}
            {step === 1 && '👉 右辺を計算してまとめる'}
            {step === 2 && '👉 2 で割って x を出す'}
            {step === 3 && '🎉 完成！'}
          </button>
        </div>
      </div>
    </div>
  );
};

export const TermOrganizerSim: React.FC = () => {
  const [isSorted, setIsSorted] = useState<boolean>(false);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
          さわって体験：同類項チーム仕分けボックス
        </span>
        <span className="text-xs text-slate-500">x と数字を分ける</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
        <div className="text-xs text-slate-500 mb-2">
          式: <span className="font-mono font-bold text-slate-800">4x + 3 - 2x + 5</span>
        </div>

        {!isSorted ? (
          <div className="flex gap-2 justify-center my-3 font-mono text-sm font-bold flex-wrap">
            <span className="px-2.5 py-1.5 bg-sky-100 text-sky-800 rounded-md border border-sky-300">
              +4x
            </span>
            <span className="px-2.5 py-1.5 bg-amber-100 text-amber-800 rounded-md border border-amber-300">
              +3
            </span>
            <span className="px-2.5 py-1.5 bg-sky-100 text-sky-800 rounded-md border border-sky-300">
              -2x
            </span>
            <span className="px-2.5 py-1.5 bg-amber-100 text-amber-800 rounded-md border border-amber-300">
              +5
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 my-3">
            <div className="bg-sky-50 border border-sky-300 rounded-lg p-2 text-center">
              <span className="text-xs font-bold text-sky-800 block mb-1">x チーム</span>
              <span className="font-mono font-bold text-sky-700">4x - 2x</span>
              <span className="block text-sm font-black text-sky-900 mt-1">＝ 2x</span>
            </div>
            <div className="bg-amber-50 border border-amber-300 rounded-lg p-2 text-center">
              <span className="text-xs font-bold text-amber-800 block mb-1">数字チーム</span>
              <span className="font-mono font-bold text-amber-700">+3 + 5</span>
              <span className="block text-sm font-black text-amber-900 mt-1">＝ +8</span>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsSorted(!isSorted)}
          className="py-2 px-4 rounded-lg bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 active:scale-95 transition"
        >
          {isSorted ? '↺ バラバラに戻す' : '📦 仲間ごとに仕分ける！'}
        </button>

        {isSorted && (
          <div className="mt-2 text-sm font-bold text-slate-800">
            答え: <span className="text-emerald-700 font-mono text-base">2x + 8</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const SubstitutionSim: React.FC = () => {
  const [val, setVal] = useState<number>(-2);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
          さわって体験：カッコをつけて代入する
        </span>
        <span className="text-xs text-slate-500">x の値を選ぶ</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200">
        <div className="flex justify-center gap-2 mb-3">
          {[-3, -2, -1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setVal(num)}
              className={`px-2.5 py-1 rounded text-xs font-bold transition ${
                val === num
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              x = {num}
            </button>
          ))}
        </div>

        <div className="space-y-2 text-sm">
          <div className="p-2 bg-slate-50 rounded border border-slate-200">
            <span className="text-xs text-slate-500 block">式 ①： 5 - 2x</span>
            <div className="font-mono mt-1 font-bold">
              5 - 2 × <span className="text-emerald-600 bg-emerald-100 px-1 rounded">({val})</span> ={' '}
              <span className="text-indigo-700 text-base">{5 - 2 * val}</span>
            </div>
          </div>

          <div className="p-2 bg-slate-50 rounded border border-slate-200">
            <span className="text-xs text-slate-500 block">式 ②： x² （2乗）</span>
            <div className="font-mono mt-1 font-bold">
              <span className="text-emerald-600 bg-emerald-100 px-1 rounded">({val})</span>² ={' '}
              <span className="text-indigo-700 text-base">{val * val}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LinearGraphSim: React.FC = () => {
  const [a, setA] = useState<number>(2);
  const formulaLabel = a === 1 ? 'y = x' : a === -1 ? 'y = -x' : `y = ${a}x`;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
          さわって体験：比例グラフ y = ax
        </span>
        <span className="text-xs font-bold text-indigo-900 font-mono">{formulaLabel}</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200">
        {/* Graph SVG */}
        <div className="flex justify-center">
          <svg viewBox="0 0 200 200" className="w-56 h-56 bg-slate-50 rounded border border-slate-200 select-none">
            <defs>
              <clipPath id="linear-grid-clip">
                <rect x="10" y="10" width="180" height="180" />
              </clipPath>
            </defs>

            {/* Grid (-4 to +4, 20px per unit) */}
            {[-4, -3, -2, -1, 1, 2, 3, 4].map((n) => (
              <React.Fragment key={n}>
                <line x1={100 + n * 20} y1="10" x2={100 + n * 20} y2="190" stroke="#e2e8f0" strokeWidth="1" />
                <line x1="10" y1={100 - n * 20} x2="190" y2={100 - n * 20} stroke="#e2e8f0" strokeWidth="1" />
              </React.Fragment>
            ))}

            {/* Axes + Arrows */}
            <line x1="10" y1="100" x2="190" y2="100" stroke="#64748b" strokeWidth="1.5" />
            <polygon points="192,100 185,96.5 185,103.5" fill="#64748b" />
            <line x1="100" y1="10" x2="100" y2="190" stroke="#64748b" strokeWidth="1.5" />
            <polygon points="100,8 96.5,15 103.5,15" fill="#64748b" />

            <text x="183" y="93" fontSize="10" fill="#475569" fontWeight="bold">x</text>
            <text x="106" y="18" fontSize="10" fill="#475569" fontWeight="bold">y</text>
            <text x="90" y="111" fontSize="9" fill="#475569" fontWeight="bold">O</text>

            {/* Tick Labels */}
            {[-4, -2, 2, 4].map((n) => (
              <React.Fragment key={`t-${n}`}>
                <text x={100 + n * 20} y="111" textAnchor="middle" fontSize="8" fill="#64748b">{n}</text>
                <text x="95" y={100 - n * 20 + 3} textAnchor="end" fontSize="8" fill="#64748b">{n}</text>
              </React.Fragment>
            ))}

            {/* Clipped Line: y = a * x */}
            <g clipPath="url(#linear-grid-clip)">
              <line
                x1={100 - 4.5 * 20}
                y1={100 + a * 4.5 * 20}
                x2={100 + 4.5 * 20}
                y2={100 - a * 4.5 * 20}
                stroke={a > 0 ? '#4f46e5' : a < 0 ? '#e11d48' : '#64748b'}
                strokeWidth="2.5"
              />
            </g>

            {/* Origin Dot */}
            <circle cx="100" cy="100" r="3.5" fill="#0f172a" />

            {/* Point (1, a) */}
            {a !== 0 && (
              <>
                <circle
                  cx={100 + 1 * 20}
                  cy={100 - a * 20}
                  r="4"
                  fill={a > 0 ? '#4f46e5' : '#e11d48'}
                  stroke="#ffffff"
                  strokeWidth="1"
                />
                <text
                  x={100 + 1 * 20 + 6}
                  y={100 - a * 20 + (a > 0 ? 4 : -2)}
                  fontSize="9"
                  fontWeight="bold"
                  fill={a > 0 ? '#4338ca' : '#be123c'}
                >
                  (1, {a})
                </text>
              </>
            )}
          </svg>
        </div>

        {/* Slope Controls */}
        <div className="mt-3 flex items-center justify-center gap-1.5 flex-wrap">
          {[-3, -2, -1, 1, 2, 3].map((val) => (
            <button
              key={val}
              onClick={() => setA(val)}
              className={`px-2.5 py-1 rounded text-xs font-bold transition ${
                a === val
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              a = {val > 0 ? `+${val}` : val}
            </button>
          ))}
        </div>

        <div className="mt-2 text-center text-xs text-slate-600">
          {a > 0 ? (
            <span className="text-indigo-700 font-bold">右上がり（xが増えるとyも増える）</span>
          ) : (
            <span className="text-rose-700 font-bold">右下がり（xが増えるとyは減る）</span>
          )}
          <span className="block text-slate-500">※ 必ず原点 (0, 0) と (1, {a}) を通ります！</span>
        </div>
      </div>
    </div>
  );
};

export const InverseGraphSim: React.FC = () => {
  const [a, setA] = useState<number>(6);

  // Grid spans -6..+6 at 14px per unit around origin (100, 100) => [16, 184]
  const unit = 14;
  const toSvgX = (x: number) => 100 + x * unit;
  const toSvgY = (y: number) => 100 - y * unit;

  const buildBranchPath = (sign: 1 | -1) => {
    const pts: string[] = [];
    const minAbsX = Math.abs(a) / 6.3;
    const maxAbsX = 6.2;
    const steps = 40;
    for (let i = 0; i <= steps; i++) {
      // Exponential spacing gives smooth resolution near the steep curve
      const t = i / steps;
      const absX = minAbsX * Math.pow(maxAbsX / minAbsX, t);
      const x = sign * absX;
      const y = a / x;
      pts.push(`${i === 0 ? 'M' : 'L'} ${toSvgX(x).toFixed(2)} ${toSvgY(y).toFixed(2)}`);
    }
    return pts.join(' ');
  };

  const latticePoints = React.useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    for (let x = -6; x <= 6; x++) {
      if (x === 0) continue;
      if (a % x === 0) {
        const y = a / x;
        if (Math.abs(y) <= 6) {
          pts.push({ x, y });
        }
      }
    }
    return pts;
  }, [a]);

  const posPath = buildBranchPath(1);
  const negPath = buildBranchPath(-1);
  const strokeColor = a > 0 ? '#4f46e5' : '#e11d48';

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
          さわって体験：反比例グラフ y = a/x
        </span>
        <span className="text-xs font-bold text-indigo-900 font-mono">
          y = {a < 0 ? `-${Math.abs(a)}/x` : `${a}/x`}
        </span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200">
        <div className="flex justify-center">
          <svg viewBox="0 0 200 200" className="w-56 h-56 bg-slate-50 rounded border border-slate-200 select-none">
            <defs>
              <clipPath id="inverse-grid-clip">
                <rect x="16" y="16" width="168" height="168" />
              </clipPath>
            </defs>

            {/* Grid (-6 to +6) */}
            {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map((n) => (
              <React.Fragment key={n}>
                <line
                  x1={toSvgX(n)}
                  y1="16"
                  x2={toSvgX(n)}
                  y2="184"
                  stroke={n % 2 === 0 ? '#cbd5e1' : '#f1f5f9'}
                  strokeWidth="1"
                />
                <line
                  x1="16"
                  y1={toSvgY(n)}
                  x2="184"
                  y2={toSvgY(n)}
                  stroke={n % 2 === 0 ? '#cbd5e1' : '#f1f5f9'}
                  strokeWidth="1"
                />
              </React.Fragment>
            ))}

            {/* Axes + Arrows */}
            <line x1="12" y1="100" x2="188" y2="100" stroke="#64748b" strokeWidth="1.5" />
            <polygon points="191,100 184,96.5 184,103.5" fill="#64748b" />
            <line x1="100" y1="12" x2="100" y2="188" stroke="#64748b" strokeWidth="1.5" />
            <polygon points="100,9 96.5,16 103.5,16" fill="#64748b" />

            <text x="183" y="93" fontSize="10" fill="#475569" fontWeight="bold">x</text>
            <text x="106" y="19" fontSize="10" fill="#475569" fontWeight="bold">y</text>
            <text x="90" y="111" fontSize="9" fill="#475569" fontWeight="bold">O</text>

            {/* Tick Labels */}
            {[-4, -2, 2, 4].map((n) => (
              <React.Fragment key={`inv-t-${n}`}>
                <text x={toSvgX(n)} y="111" textAnchor="middle" fontSize="8" fill="#64748b">{n}</text>
                <text x="94" y={toSvgY(n) + 3} textAnchor="end" fontSize="8" fill="#64748b">{n}</text>
              </React.Fragment>
            ))}

            {/* Accurate Hyperbolic Curves (y = a / x) */}
            <g clipPath="url(#inverse-grid-clip)">
              <path d={posPath} fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
              <path d={negPath} fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Exact integer lattice dots on the curve */}
            {latticePoints.map((pt) => (
              <circle
                key={`${pt.x},${pt.y}`}
                cx={toSvgX(pt.x)}
                cy={toSvgY(pt.y)}
                r="3"
                fill={strokeColor}
                stroke="#ffffff"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
          {[6, 12, -6, -12].map((val) => (
            <button
              key={val}
              onClick={() => setA(val)}
              className={`px-3 py-1 rounded text-xs font-bold transition ${
                a === val
                  ? val > 0
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-rose-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              a = {val > 0 ? `+${val}` : val}
            </button>
          ))}
        </div>

        <div className="mt-2 text-center text-xs text-slate-600">
          {a > 0 ? (
            <span className="text-indigo-700 font-bold block">
              右上と左下に双曲線が出ます！（x＞0でもx＜0でも、xが増えるとyは減る）
            </span>
          ) : (
            <span className="text-rose-700 font-bold block">
              左上と右下に双曲線が出ます！（x＞0でもx＜0でも、xが増えるとyは増える）
            </span>
          )}
          <span className="text-[11px] text-slate-500">
            |a|が大きいほど原点から離れます。原点や縦横の軸には<strong className="text-rose-600">絶対に触れません</strong>。
          </span>
        </div>
      </div>
    </div>
  );
};

export const LineAngleViewerSim: React.FC = () => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded inline-block mb-2">
        図形記号の形と意味
      </div>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2.5 bg-white rounded-lg border border-slate-200">
          <span className="text-lg font-mono font-bold text-rose-600 block">//</span>
          <span className="text-xs font-bold text-slate-800">平行（へいこう）</span>
          <span className="text-[11px] text-slate-500 block">どこまで行っても交わらない線</span>
        </div>
        <div className="p-2.5 bg-white rounded-lg border border-slate-200">
          <span className="text-lg font-mono font-bold text-rose-600 block">⊥</span>
          <span className="text-xs font-bold text-slate-800">垂直（すいちょく）</span>
          <span className="text-[11px] text-slate-500 block">直角（90°）に交わる</span>
        </div>
        <div className="p-2.5 bg-white rounded-lg border border-slate-200">
          <span className="text-lg font-mono font-bold text-rose-600 block">∠</span>
          <span className="text-xs font-bold text-slate-800">角（かく）</span>
          <span className="text-[11px] text-slate-500 block">∠ABC は真ん中Bの角度</span>
        </div>
      </div>
    </div>
  );
};

export const CompassBisectorSim: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  // A(50, 60), B(190, 60): midpoint M(120, 60), distance AM = 70.
  // R = 80 => intersection x = 120, y = 60 ± sqrt(80^2 - 70^2) = 60 ± 38.73 -> 21.27 and 98.73.
  // Arcs from A(50,60) with R=80 spanning ±38 deg: (50 + 80*cos38, 60 ± 80*sin38) = (113.04, 10.75) to (113.04, 109.25).
  // Actually let's span from -34 deg to +34 deg? No, intersection is at cos(theta)=70/80=0.875 => theta=28.955 deg.
  // To pass cleanly past the intersection (theta=±29 deg), span from -38 deg to +38 deg around 0 deg (for A) and 180 deg (for B):
  // A: start (113.04, 10.75), end (113.04, 109.25), sweep=1 (passes through (130, 60) on the right)
  // B: start (126.96, 10.75), end (126.96, 109.25), sweep=0 (passes through (110, 60) on the left)

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
          さわって体験：垂直二等分線の作図ステップ
        </span>
        <button
          onClick={() => setStep(1)}
          className="text-xs text-rose-700 underline font-medium"
        >
          リセット
        </button>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
        <svg viewBox="0 0 240 120" className="w-full h-36 select-none mx-auto">
          {/* Segment AB */}
          <line x1="50" y1="60" x2="190" y2="60" stroke="#475569" strokeWidth="2.5" />
          <circle cx="50" cy="60" r="4" fill="#0284c7" />
          <text x="36" y="64" fontSize="12" fontWeight="bold" fill="#0284c7">A</text>
          <circle cx="190" cy="60" r="4" fill="#0284c7" />
          <text x="197" y="64" fontSize="12" fontWeight="bold" fill="#0284c7">B</text>

          {/* Step 1 Arc from A(50,60), R=80 */}
          {step >= 1 && (
            <path
              d="M 113.04 10.75 A 80 80 0 0 1 113.04 109.25"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
          )}

          {/* Step 2 Arc from B(190,60), R=80 */}
          {step >= 2 && (
            <path
              d="M 126.96 10.75 A 80 80 0 0 0 126.96 109.25"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
          )}

          {/* Exact Intersections at (120, 21.27) and (120, 98.73) */}
          {step >= 2 && (
            <>
              <circle cx="120" cy="21.27" r="3.5" fill="#f59e0b" />
              <circle cx="120" cy="98.73" r="3.5" fill="#f59e0b" />
            </>
          )}

          {/* Step 3 Perpendicular Line, right angle mark, midpoint ticks */}
          {step >= 3 && (
            <>
              <line x1="120" y1="8" x2="120" y2="112" stroke="#10b981" strokeWidth="2.5" />
              <polyline points="120,52 128,52 128,60" fill="none" stroke="#10b981" strokeWidth="1.5" />
              <line x1="85" y1="56" x2="85" y2="64" stroke="#475569" strokeWidth="1.5" />
              <line x1="155" y1="56" x2="155" y2="64" stroke="#475569" strokeWidth="1.5" />
            </>
          )}
        </svg>

        <div className="text-xs text-slate-700 font-medium my-2">
          {step === 1 && '① 点Aに針を刺し、線分の半分より長めに開いて弧を描く'}
          {step === 2 && '② コンパスの幅を変えずに、点Bからも弧を描いて交点を作る'}
          {step === 3 && '③ 2つの交点を定規で結べば、垂直二等分線の完成！'}
        </div>

        <div className="flex justify-center gap-2">
          <button
            onClick={() => setStep((s) => Math.min(3, s + 1))}
            disabled={step === 3}
            className="py-1.5 px-4 rounded bg-rose-600 text-white text-xs font-bold hover:bg-rose-700 disabled:opacity-40 transition"
          >
            次の作図手順へ
          </button>
        </div>
      </div>
    </div>
  );
};

export const SectorCalculatorSim: React.FC = () => {
  const [angle, setAngle] = useState<number>(60);
  const r = 6;

  const formatPiCoef = (val: number) => {
    const rounded = Math.round(val * 10) / 10;
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  };

  const fraction = angle / 360;
  const arcLength = formatPiCoef(2 * r * fraction);
  const area = formatPiCoef(r * r * fraction);

  // SVG Sector centered at (50, 52), radius 34
  const cx = 50;
  const cy = 52;
  const sr = 34;
  const rad = (angle * Math.PI) / 180;
  const ex = cx + sr * Math.cos(-rad);
  const ey = cy + sr * Math.sin(-rad);
  const largeArcFlag = angle > 180 ? 1 : 0;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
          さわって体験：扇形（おうぎ形）シミュレータ
        </span>
        <span className="text-xs font-bold text-rose-800">半径 r = 6cm</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200">
        <div className="flex justify-center mb-2">
          <svg viewBox="0 0 100 85" className="w-28 h-24 select-none">
            <circle cx={cx} cy={cy} r={sr} fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
            <path
              d={`M ${cx} ${cy} L ${cx + sr} ${cy} A ${sr} ${sr} 0 ${largeArcFlag} 0 ${ex.toFixed(2)} ${ey.toFixed(2)} Z`}
              fill="#ffe4e6"
              stroke="#e11d48"
              strokeWidth="2"
            />
            <text x={cx + 15} y={cy + 12} fontSize="8" fill="#be123c" fontWeight="bold">6cm</text>
            <text x={cx + 8} y={cy - 6} fontSize="8" fill="#9f1239" fontWeight="bold">{angle}°</text>
          </svg>
        </div>

        <div className="flex items-center gap-2 justify-center mb-2">
          {[60, 90, 120, 180].map((deg) => (
            <button
              key={deg}
              onClick={() => setAngle(deg)}
              className={`px-2.5 py-1 rounded text-xs font-bold transition ${
                angle === deg
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {deg}°
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 text-center mt-2">
          <div className="p-2 bg-rose-50 rounded border border-rose-200">
            <span className="text-xs text-slate-500 block">弧の長さ ℓ</span>
            <span className="text-base font-bold text-rose-800">
              {arcLength}π <span className="text-xs">cm</span>
            </span>
            <span className="text-[10px] text-slate-500 block">2π×6 × ({angle}/360)</span>
          </div>

          <div className="p-2 bg-amber-50 rounded border border-amber-200">
            <span className="text-xs text-slate-500 block">面積 S</span>
            <span className="text-base font-bold text-amber-800">
              {area}π <span className="text-xs">cm²</span>
            </span>
            <span className="text-[10px] text-slate-500 block">π×6² × ({angle}/360)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CubeSkewLinesSim: React.FC = () => {
  const [filter, setFilter] = useState<'skew' | 'parallel' | 'intersect'>('skew');

  // Vertices of rectangular prism ABCD-EFGH:
  // Top face: A(30,70), B(110,70), C(140,40), D(60,40)
  // Bottom face: E(30,130), F(110,130), G(140,100), H(60,100)
  // Reference edge: AB (front-top)
  // Parallel to AB (3): CD (back-top), EF (front-bottom), GH (back-bottom dashed)
  // Intersecting AB (4): AD, BC, AE, BF
  // Skew to AB (4): CG, DH (dashed), FG, EH (dashed)

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded">
          さわって体験：直方体のねじれの位置判定
        </span>
        <span className="text-xs text-slate-500">基準：辺AB</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
        {/* Cube SVG */}
        <div className="flex justify-center">
          <svg viewBox="0 0 200 155" className="w-56 h-44 select-none">
            {/* Hidden back edges (dashed): DH (skew), GH (parallel), EH (skew) */}
            <line
              x1="60"
              y1="40"
              x2="60"
              y2="100"
              stroke={filter === 'skew' ? '#f59e0b' : '#cbd5e1'}
              strokeWidth={filter === 'skew' ? '3' : '1.5'}
              strokeDasharray="4 3"
            />
            <line
              x1="60"
              y1="100"
              x2="140"
              y2="100"
              stroke={filter === 'parallel' ? '#0ea5e9' : '#cbd5e1'}
              strokeWidth={filter === 'parallel' ? '3' : '1.5'}
              strokeDasharray="4 3"
            />
            <line
              x1="60"
              y1="100"
              x2="30"
              y2="130"
              stroke={filter === 'skew' ? '#f59e0b' : '#cbd5e1'}
              strokeWidth={filter === 'skew' ? '3' : '1.5'}
              strokeDasharray="4 3"
            />

            {/* Parallel to AB (visible): CD, EF */}
            <line
              x1="60"
              y1="40"
              x2="140"
              y2="40"
              stroke={filter === 'parallel' ? '#0ea5e9' : '#cbd5e1'}
              strokeWidth={filter === 'parallel' ? '3' : '1.5'}
            />
            <line
              x1="30"
              y1="130"
              x2="110"
              y2="130"
              stroke={filter === 'parallel' ? '#0ea5e9' : '#cbd5e1'}
              strokeWidth={filter === 'parallel' ? '3' : '1.5'}
            />

            {/* Intersecting AB: AE, BF, AD, BC */}
            <line
              x1="30"
              y1="70"
              x2="30"
              y2="130"
              stroke={filter === 'intersect' ? '#f43f5e' : '#cbd5e1'}
              strokeWidth={filter === 'intersect' ? '3' : '1.5'}
            />
            <line
              x1="110"
              y1="70"
              x2="110"
              y2="130"
              stroke={filter === 'intersect' ? '#f43f5e' : '#cbd5e1'}
              strokeWidth={filter === 'intersect' ? '3' : '1.5'}
            />
            <line
              x1="30"
              y1="70"
              x2="60"
              y2="40"
              stroke={filter === 'intersect' ? '#f43f5e' : '#cbd5e1'}
              strokeWidth={filter === 'intersect' ? '3' : '1.5'}
            />
            <line
              x1="110"
              y1="70"
              x2="140"
              y2="40"
              stroke={filter === 'intersect' ? '#f43f5e' : '#cbd5e1'}
              strokeWidth={filter === 'intersect' ? '3' : '1.5'}
            />

            {/* Skew to AB (visible): CG, FG */}
            <line
              x1="140"
              y1="40"
              x2="140"
              y2="100"
              stroke={filter === 'skew' ? '#f59e0b' : '#cbd5e1'}
              strokeWidth={filter === 'skew' ? '3.5' : '1.5'}
            />
            <line
              x1="110"
              y1="130"
              x2="140"
              y2="100"
              stroke={filter === 'skew' ? '#f59e0b' : '#cbd5e1'}
              strokeWidth={filter === 'skew' ? '3.5' : '1.5'}
            />

            {/* Reference Edge AB */}
            <line x1="30" y1="70" x2="110" y2="70" stroke="#0284c7" strokeWidth="3.5" />
            <text x="70" y="64" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0284c7">基準：辺AB</text>

            {/* Vertex Labels */}
            <text x="19" y="73" fontSize="10" fontWeight="bold" fill="#334155">A</text>
            <text x="113" y="78" fontSize="10" fontWeight="bold" fill="#334155">B</text>
            <text x="145" y="42" fontSize="10" fontWeight="bold" fill="#334155">C</text>
            <text x="53" y="34" fontSize="10" fontWeight="bold" fill="#334155">D</text>
            <text x="19" y="135" fontSize="10" fontWeight="bold" fill="#334155">E</text>
            <text x="113" y="142" fontSize="10" fontWeight="bold" fill="#334155">F</text>
            <text x="146" y="105" fontSize="10" fontWeight="bold" fill="#334155">G</text>
            <text x="64" y="96" fontSize="10" fontWeight="bold" fill="#64748b">H</text>
          </svg>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-1.5 mt-2 flex-wrap">
          <button
            onClick={() => setFilter('skew')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              filter === 'skew'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            ⭐ ねじれの位置（4本）
          </button>
          <button
            onClick={() => setFilter('parallel')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              filter === 'parallel'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            平行な線（3本）
          </button>
          <button
            onClick={() => setFilter('intersect')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              filter === 'intersect'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            交わる線（4本）
          </button>
        </div>

        <div className="text-xs text-slate-600 mt-2">
          {filter === 'skew' && (
            <span className="text-amber-800 font-bold">
              辺CG・辺DH・辺FG・辺EH の4本！平行でもなく交わりもしない、すれ違いの線です（点線は奥の辺）。
            </span>
          )}
          {filter === 'parallel' && '辺CD・辺EF・辺GH の3本！同じ向きに並んでいます（点線GHは奥の辺）。'}
          {filter === 'intersect' && '辺AD・辺BC・辺AE・辺BF の4本！頂点AやBでくっついています。'}
        </div>
      </div>
    </div>
  );
};

export const SolidVolumeSim: React.FC = () => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="text-xs font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded inline-block mb-2">
        体積のヒミツ：円錐 3杯 ＝ 円柱 1杯
      </div>
      <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
        <div className="flex items-center justify-center gap-3 my-2">
          <div className="p-2 bg-teal-50 border border-teal-200 rounded text-center">
            <span className="text-2xl block">🍦</span>
            <span className="text-xs font-bold text-teal-800">円錐 (錐体)</span>
            <span className="text-xs text-teal-600 block">V = 1/3 Sh</span>
          </div>
          <span className="text-lg font-bold text-slate-400">× 3杯 ＝</span>
          <div className="p-2 bg-sky-50 border border-sky-200 rounded text-center">
            <span className="text-2xl block">🥫</span>
            <span className="text-xs font-bold text-sky-800">円柱 (柱体)</span>
            <span className="text-xs text-sky-600 block">V = Sh</span>
          </div>
        </div>
        <p className="text-xs text-slate-600">
          底面と高さが同じなら、錐体は柱体のちょうど <strong>1/3</strong> の量になります！
        </p>
      </div>
    </div>
  );
};

export const SphereFormulaSim: React.FC = () => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="text-xs font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded inline-block mb-2">
        球の公式の神語呂合わせ
      </div>
      <div className="grid grid-cols-2 gap-2 text-center">
        <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg">
          <span className="text-xs text-slate-500 block">表面積 (cm²)</span>
          <span className="text-base font-black text-rose-700 block">S = 4πr²</span>
          <span className="text-xs font-bold text-rose-900 bg-white px-2 py-0.5 rounded inline-block mt-1">
            心配あるある
          </span>
        </div>
        <div className="p-2.5 bg-sky-50 border border-sky-200 rounded-lg">
          <span className="text-xs text-slate-500 block">体積 (cm³)</span>
          <span className="text-base font-black text-sky-700 block">V = 4/3 πr³</span>
          <span className="text-xs font-bold text-sky-900 bg-white px-2 py-0.5 rounded inline-block mt-1">
            身の上に心配ある参乗
          </span>
        </div>
      </div>
    </div>
  );
};

export const HistogramViewerSim: React.FC = () => {
  const [showPolygon, setShowPolygon] = useState<boolean>(false);
  // Bins: 10-20 (freq 3, mid 15), 20-30 (freq 8, mid 25), 30-40 (freq 5, mid 35)
  // Y-axis: 0..10 => y0=120, y10=20 => 10px per person
  const y0 = 120;
  const pxPerFreq = 10;
  const bins = [
    { label: '10〜20', mid: 15, freq: 3, x: 50, fill: '#c4b5fd' },
    { label: '20〜30', mid: 25, freq: 8, x: 100, fill: '#8b5cf6' },
    { label: '30〜40', mid: 35, freq: 5, x: 150, fill: '#a78bfa' },
  ];
  const barW = 50;
  const polyPoints = [
    `25,${y0}`,
    ...bins.map((b) => `${b.x + barW / 2},${y0 - b.freq * pxPerFreq}`),
    `225,${y0}`,
  ].join(' ');

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-violet-700 bg-violet-100 px-2 py-0.5 rounded">
          ヒストグラムと度数折れ線・階級値
        </span>
        <button
          onClick={() => setShowPolygon((v) => !v)}
          className={`text-xs font-bold px-2.5 py-1 rounded transition ${
            showPolygon ? 'bg-rose-600 text-white' : 'bg-violet-100 text-violet-800 hover:bg-violet-200'
          }`}
        >
          {showPolygon ? '度数折れ線をかくす' : '度数折れ線を重ねる'}
        </button>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200">
        <svg viewBox="0 0 250 155" className="w-full max-w-xs h-44 mx-auto select-none">
          {/* Horizontal grid lines (2, 4, 6, 8, 10) */}
          {[2, 4, 6, 8, 10].map((v) => (
            <g key={v}>
              <line x1="25" y1={y0 - v * pxPerFreq} x2="230" y2={y0 - v * pxPerFreq} stroke="#f1f5f9" strokeWidth="1" />
              <text x="20" y={y0 - v * pxPerFreq + 3} textAnchor="end" fontSize="8" fill="#64748b">{v}</text>
            </g>
          ))}
          <text x="16" y="14" fontSize="8" fill="#64748b">(人)</text>

          {/* Gapless Histogram Bars */}
          {bins.map((b) => {
            const h = b.freq * pxPerFreq;
            const y = y0 - h;
            return (
              <g key={b.label}>
                <rect x={b.x} y={y} width={barW} height={h} fill={b.fill} stroke="#6d28d9" strokeWidth="1.5" />
                <text x={b.x + barW / 2} y={y - 4} textAnchor="middle" fontSize="9" fontWeight="bold" fill="#4c1d95">
                  {b.freq}人
                </text>
                <text x={b.x + barW / 2} y="133" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#475569">
                  {b.label}
                </text>
                <text x={b.x + barW / 2} y="145" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#6d28d9">
                  階級値{b.mid}
                </text>
              </g>
            );
          })}

          {/* Axes */}
          <line x1="25" y1="15" x2="25" y2={y0} stroke="#64748b" strokeWidth="1.5" />
          <line x1="25" y1={y0} x2="235" y2={y0} stroke="#64748b" strokeWidth="1.5" />
          <text x="20" y="123" textAnchor="end" fontSize="8" fill="#64748b">0</text>

          {/* Frequency Polygon */}
          {showPolygon && (
            <g>
              <polyline points={polyPoints} fill="none" stroke="#e11d48" strokeWidth="2.5" />
              <circle cx="25" cy={y0} r="3" fill="#e11d48" />
              {bins.map((b) => (
                <circle key={`pt-${b.mid}`} cx={b.x + barW / 2} cy={y0 - b.freq * pxPerFreq} r="3.5" fill="#e11d48" stroke="#ffffff" strokeWidth="1" />
              ))}
              <circle cx="225" cy={y0} r="3" fill="#e11d48" />
            </g>
          )}
        </svg>

        <p className="text-[11px] text-center text-slate-600 mt-1">
          柱と柱は<strong>すき間なく</strong>くっつけます。上の辺の真ん中（階級値）を結んで両端を横軸におろすと度数折れ線になります！
        </p>
      </div>
    </div>
  );
};

export const MeanMedianModeSim: React.FC = () => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="text-xs font-bold text-violet-700 bg-violet-100 px-2 py-0.5 rounded inline-block mb-2">
        3大代表値のちがい早見
      </div>
      <div className="space-y-2 text-xs">
        <div className="p-2 bg-white rounded border border-slate-200 flex items-center justify-between">
          <span className="font-bold text-slate-800">平均値（へいきんち）</span>
          <span className="text-slate-600">全員の合計 ÷ 全体の人数</span>
        </div>
        <div className="p-2 bg-white rounded border border-slate-200 flex items-center justify-between">
          <span className="font-bold text-indigo-700">中央値（メジアン）</span>
          <span className="text-slate-600">小さい順に並べてちょうど真ん中</span>
        </div>
        <div className="p-2 bg-white rounded border border-slate-200 flex items-center justify-between">
          <span className="font-bold text-rose-700">最頻値（モード）</span>
          <span className="text-slate-600">一番たくさん出てくる数（一番人気の柱）</span>
        </div>
      </div>
    </div>
  );
};

export const PrimeFactorTreeSim: React.FC = () => {
  const [targetNum, setTargetNum] = useState<number>(36);

  const factorSteps = React.useMemo(() => {
    let n = targetNum;
    const primes: number[] = [];
    const steps: { dividend: number; divisor: number }[] = [];
    let d = 2;
    while (n > 1 && d * d <= n) {
      while (n % d === 0) {
        steps.push({ dividend: n, divisor: d });
        primes.push(d);
        n = n / d;
      }
      d += 1;
    }
    if (n > 1) {
      primes.push(n);
    }
    const counts: Record<number, number> = {};
    primes.forEach((p) => {
      counts[p] = (counts[p] || 0) + 1;
    });
    const exponentEntries = Object.entries(counts).map(([p, c]) => ({ base: p, exp: c }));
    return { primes, steps, exponentEntries };
  }, [targetNum]);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
          さわって体験：素因数分解はしご算
        </span>
        <span className="text-xs text-slate-500">数字を選んでみよう</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200">
        <div className="flex justify-center gap-1.5 mb-3 flex-wrap">
          {[12, 18, 24, 36, 45, 60, 72].map((num) => (
            <button
              key={num}
              onClick={() => setTargetNum(num)}
              className={`px-2.5 py-1.5 rounded text-xs font-bold transition ${
                targetNum === num
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        <div className="bg-sky-50/70 border border-sky-200 rounded-lg p-3 text-center font-mono text-sm">
          <div className="inline-block text-left space-y-1 mb-2">
            {factorSteps.steps.map((s, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="font-bold text-rose-600 w-5 text-right">{s.divisor}</span>
                <span className="border-l-2 border-b-2 border-slate-400 px-3 py-0.5 font-bold text-slate-800">
                  {s.dividend}
                </span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span className="w-5"></span>
              <span className="px-3 font-bold text-emerald-700">
                {factorSteps.primes[factorSteps.primes.length - 1]}
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-sky-200 text-slate-800 font-sans">
            <span className="text-xs text-slate-500 block">素因数分解の結果</span>
            <span className="font-mono font-bold text-base text-sky-900">
              {targetNum} ＝ {factorSteps.primes.join(' × ')}
            </span>
            <span className="block text-xs font-bold text-indigo-700 mt-0.5">
              指数まとめ：{' '}
              {factorSteps.exponentEntries.map((item, idx) => (
                <React.Fragment key={item.base}>
                  {idx > 0 && ' × '}
                  {item.base}
                  {item.exp > 1 && <sup>{item.exp}</sup>}
                </React.Fragment>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StrawPatternSim: React.FC = () => {
  const [squares, setSquares] = useState<number>(3);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
          さわって体験：ストローで正方形づくり
        </span>
        <span className="text-xs font-bold text-emerald-900">正方形 {squares}個</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
        <div className="flex justify-center py-3 overflow-x-auto">
          <svg viewBox={`0 0 ${Math.max(200, squares * 44 + 40)} 64`} className="h-16 select-none">
            {/* Leftmost 1 vertical straw */}
            <line x1="20" y1="12" x2="20" y2="52" stroke="#e11d48" strokeWidth="4" strokeLinecap="round" />
            {/* Each square adds 3 straws (top, bottom, right) */}
            {Array.from({ length: squares }).map((_, i) => {
              const x0 = 20 + i * 40;
              const x1 = x0 + 40;
              return (
                <g key={i}>
                  <line x1={x0 + 2} y1="12" x2={x1 - 2} y2="12" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1={x0 + 2} y1="52" x2={x1 - 2} y2="52" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1={x1} y1="12" x2={x1} y2="52" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="flex justify-center gap-2 mb-3">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => setSquares(n)}
              className={`px-3 py-1 rounded text-xs font-bold transition ${
                squares === n
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {n}個
            </button>
          ))}
        </div>

        <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-xs">
          <div className="font-bold text-emerald-900 text-sm">
            必要なストロー ＝ <span className="text-rose-600">1</span> ＋ <span className="text-emerald-700">3 × {squares}</span> ＝{' '}
            <span className="text-lg font-black">{1 + 3 * squares}本</span>
          </div>
          <div className="text-slate-600 mt-1">
            赤の左端（1本）＋ コの字パーツ（3本）× {squares}個 ＝ 3x + 1 のルール！
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProportionRatioSim: React.FC = () => {
  const [k, setK] = useState<number>(3);
  const a = 2;
  const b = 3;
  const c = a * k;
  const d = b * k;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
          さわって体験：比例式「外×外 ＝ 内×内」チェック
        </span>
        <span className="text-xs text-slate-500">倍率をかえてみよう</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
        <div className="text-lg font-mono font-bold text-slate-800 py-2 bg-amber-50/70 rounded border border-amber-200 mb-3">
          <span className="text-sky-700">{a}</span> : <span className="text-rose-600">{b}</span> ＝{' '}
          <span className="text-rose-600">{c}</span> : <span className="text-sky-700">{d}</span>
        </div>

        <div className="flex justify-center gap-2 mb-3">
          {[2, 3, 4, 5].map((mult) => (
            <button
              key={mult}
              onClick={() => setK(mult)}
              className={`px-3 py-1 rounded text-xs font-bold transition ${
                k === mult
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {mult}倍の比
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-sky-50 border border-sky-200 rounded">
            <span className="font-bold text-sky-800 block">外 × 外</span>
            <span className="font-mono text-sm font-bold text-sky-900">
              {a} × {d} ＝ {a * d}
            </span>
          </div>
          <div className="p-2 bg-rose-50 border border-rose-200 rounded">
            <span className="font-bold text-rose-800 block">内 × 内</span>
            <span className="font-mono text-sm font-bold text-rose-900">
              {b} × {c} ＝ {b * c}
            </span>
          </div>
        </div>
        <p className="text-[11px] text-emerald-700 font-bold mt-2">
          どちらも「{a * d}」でピッタリ一致！だから a:b = c:d は ad = bc に変身できます。
        </p>
      </div>
    </div>
  );
};

export const ProjectionViewerSim: React.FC = () => {
  const [solid, setSolid] = useState<'cone' | 'cylinder' | 'pyramid'>('cone');

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded">
          さわって体験：投影図（立面図・平面図）チェッカー
        </span>
        <span className="text-xs text-slate-500">立体をえらぶ</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
        <div className="flex justify-center gap-2 mb-3">
          {[
            { id: 'cone', label: '円錐' },
            { id: 'cylinder', label: '円柱' },
            { id: 'pyramid', label: '正四角錐' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSolid(item.id as 'cone' | 'cylinder' | 'pyramid')}
              className={`px-3 py-1 rounded text-xs font-bold transition ${
                solid === item.id
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="max-w-[200px] mx-auto bg-slate-50 rounded-lg border border-slate-200 p-2">
          <span className="text-[11px] font-bold text-teal-800 block">立面図（真正面）</span>
          <svg viewBox="0 0 100 155" className="w-32 h-44 mx-auto select-none">
            {/* Front view (x=25..75) */}
            {solid === 'cylinder' ? (
              <rect x="25" y="10" width="50" height="55" fill="#ccfbf1" stroke="#0f766e" strokeWidth="2" />
            ) : (
              <polygon points="50,10 25,65 75,65" fill="#ccfbf1" stroke="#0f766e" strokeWidth="2" />
            )}

            {/* Orthographic guide lines */}
            <line x1="25" y1="65" x2="25" y2="90" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="75" y1="65" x2="75" y2="90" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />

            {/* Fold line */}
            <line x1="10" y1="77" x2="90" y2="77" stroke="#64748b" strokeWidth="1.5" />

            {/* Top view (x=25..75, aligned!) */}
            {solid === 'pyramid' ? (
              <>
                <rect x="25" y="90" width="50" height="50" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2" />
                <line x1="25" y1="90" x2="75" y2="140" stroke="#0369a1" strokeWidth="1.5" />
                <line x1="75" y1="90" x2="25" y2="140" stroke="#0369a1" strokeWidth="1.5" />
              </>
            ) : (
              <>
                <circle cx="50" cy="115" r="25" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2" />
                {solid === 'cone' && <circle cx="50" cy="115" r="3" fill="#0369a1" />}
              </>
            )}
          </svg>
          <span className="text-[11px] font-bold text-sky-800 block">平面図（真上）</span>
        </div>

        <p className="text-xs text-slate-600 mt-2">
          {solid === 'cone' && '正面は二等辺三角形、真上は真ん中に頂点の点がある「円」になります（横幅が上下でピタッと揃います）。'}
          {solid === 'cylinder' && '正面は長方形、真上は点のない「円」になります。'}
          {solid === 'pyramid' && '正面は二等辺三角形、真上は正方形に対角線（×）が見えます！'}
        </p>
      </div>
    </div>
  );
};

export const ConeUnfoldSim: React.FC = () => {
  const [r, setR] = useState<number>(3);
  const R = 6;
  const angle = Math.round((360 * r) / R);

  // Unfolded SVG: sector apex at (60, 46), R_px = 42, base circle radius = R_px * (r / R)
  const apexX = 60;
  const apexY = 46;
  const Rpx = 40;
  const rpx = Rpx * (r / R);
  const halfRad = ((angle / 2) * Math.PI) / 180;
  // Open downward around +90 deg
  const leftAngle = Math.PI / 2 + halfRad;
  const rightAngle = Math.PI / 2 - halfRad;
  const x1 = apexX + Rpx * Math.cos(rightAngle);
  const y1 = apexY + Rpx * Math.sin(rightAngle);
  const x2 = apexX + Rpx * Math.cos(leftAngle);
  const y2 = apexY + Rpx * Math.sin(leftAngle);
  const largeArc = angle > 180 ? 1 : 0;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded">
          さわって体験：円錐の展開図と中心角
        </span>
        <span className="text-xs font-bold text-teal-900">母線 R = 6cm</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
        <div className="flex justify-center mb-2">
          <svg viewBox="0 0 120 140" className="w-32 h-36 select-none">
            <path
              d={`M ${apexX} ${apexY} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${Rpx} ${Rpx} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`}
              fill="#ccfbf1"
              stroke="#0f766e"
              strokeWidth="2"
            />
            <circle
              cx={apexX}
              cy={apexY + Rpx + rpx + 2}
              r={rpx}
              fill="#e0f2fe"
              stroke="#0369a1"
              strokeWidth="2"
            />
            <text x={apexX} y={apexY + 18} textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#0f766e">
              {angle}°
            </text>
            <text x={apexX} y={apexY + Rpx + rpx + 5} textAnchor="middle" fontSize="8" fontWeight="bold" fill="#0369a1">
              r={r}
            </text>
          </svg>
        </div>

        <div className="flex justify-center gap-2 mb-3 flex-wrap">
          {[1, 2, 3, 4].map((val) => (
            <button
              key={val}
              onClick={() => setR(val)}
              className={`px-2.5 py-1 rounded text-xs font-bold transition ${
                r === val
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              底面半径 r={val}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="p-2 bg-teal-50 rounded border border-teal-200">
            <span className="text-slate-500 block">中心角 a</span>
            <span className="text-base font-black text-teal-800">{angle}°</span>
            <span className="text-[10px] text-slate-500 block">360 × ({r}/{R})</span>
          </div>
          <div className="p-2 bg-sky-50 rounded border border-sky-200">
            <span className="text-slate-500 block">側面積 πRr</span>
            <span className="text-base font-black text-sky-800">{R * r}π cm²</span>
            <span className="text-[10px] text-slate-500 block">{R} × {r} × π</span>
          </div>
          <div className="p-2 bg-amber-50 rounded border border-amber-200">
            <span className="text-slate-500 block">表面積</span>
            <span className="text-base font-black text-amber-800">{R * r + r * r}π cm²</span>
            <span className="text-[10px] text-slate-500 block">{R * r}π + {r * r}π</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RelativeFreqCompareSim: React.FC = () => {
  const [totalA, setTotalA] = useState<number>(30);
  const [freqA, setFreqA] = useState<number>(6);
  const [totalB, setTotalB] = useState<number>(40);
  const [freqB, setFreqB] = useState<number>(8);

  const relA = (freqA / totalA).toFixed(2);
  const relB = (freqB / totalB).toFixed(2);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-violet-700 bg-violet-100 px-2 py-0.5 rounded">
          さわって体験：相対度数で人数がちがう組を比べる
        </span>
        <span className="text-xs text-slate-500">度数 ÷ 全体</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white rounded-lg p-3 border border-slate-200">
        <div className="p-2.5 bg-violet-50 rounded-lg border border-violet-200">
          <div className="text-xs font-bold text-violet-900 mb-1">1組（全体 {totalA}人）</div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span>全体の人数</span>
            <div className="flex gap-1">
              {[25, 30, 40].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTotalA(t);
                    setFreqA((f) => Math.min(f, t));
                  }}
                  className={`px-2 py-0.5 rounded font-bold ${totalA === t ? 'bg-violet-600 text-white' : 'bg-white border border-violet-200'}`}
                >
                  {t}人
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between text-xs mb-2">
            <span>度数（人数）</span>
            <div className="flex items-center gap-1.5">
              <button onClick={() => setFreqA((f) => Math.max(1, f - 1))} className="w-6 h-6 bg-white rounded border border-violet-300 font-bold">-</button>
              <span className="font-bold w-8 text-center">{freqA}人</span>
              <button onClick={() => setFreqA((f) => Math.min(totalA, f + 1))} className="w-6 h-6 bg-white rounded border border-violet-300 font-bold">+</button>
            </div>
          </div>
          <div className="text-center pt-1.5 border-t border-violet-200">
            <span className="text-[11px] text-slate-600">{freqA} ÷ {totalA} ＝ </span>
            <strong className="text-base text-violet-800">{relA}</strong>
          </div>
        </div>

        <div className="p-2.5 bg-sky-50 rounded-lg border border-sky-200">
          <div className="text-xs font-bold text-sky-900 mb-1">2組（全体 {totalB}人）</div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span>全体の人数</span>
            <div className="flex gap-1">
              {[25, 30, 40].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTotalB(t);
                    setFreqB((f) => Math.min(f, t));
                  }}
                  className={`px-2 py-0.5 rounded font-bold ${totalB === t ? 'bg-sky-600 text-white' : 'bg-white border border-sky-200'}`}
                >
                  {t}人
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between text-xs mb-2">
            <span>度数（人数）</span>
            <div className="flex items-center gap-1.5">
              <button onClick={() => setFreqB((f) => Math.max(1, f - 1))} className="w-6 h-6 bg-white rounded border border-sky-300 font-bold">-</button>
              <span className="font-bold w-8 text-center">{freqB}人</span>
              <button onClick={() => setFreqB((f) => Math.min(totalB, f + 1))} className="w-6 h-6 bg-white rounded border border-sky-300 font-bold">+</button>
            </div>
          </div>
          <div className="text-center pt-1.5 border-t border-sky-200">
            <span className="text-[11px] text-slate-600">{freqB} ÷ {totalB} ＝ </span>
            <strong className="text-base text-sky-800">{relB}</strong>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-center text-slate-600 mt-2">
        {relA === relB
          ? `人数はちがっても、割合（相対度数）はどちらも ${relA} で同じ！`
          : Number(relA) > Number(relB)
          ? `1組のほうが割合が高い（${relA} ＞ ${relB}）ことがわかります！`
          : `2組のほうが割合が高い（${relB} ＞ ${relA}）ことがわかります！`}
      </p>
    </div>
  );
};

export const RelativeFreqSim: React.FC = () => {
  const [trials, setTrials] = useState<number>(100);
  const dataset: Record<number, { count: number; freq: string }> = {
    10: { count: 6, freq: '0.600' },
    50: { count: 23, freq: '0.460' },
    100: { count: 42, freq: '0.420' },
    500: { count: 206, freq: '0.412' },
    2000: { count: 822, freq: '0.411' },
  };
  const current = dataset[trials];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-violet-700 bg-violet-100 px-2 py-0.5 rounded">
          さわって体験：実験回数と相対度数・確率
        </span>
        <span className="text-xs text-slate-500">回数を増やそう</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200 text-center">
        <div className="flex justify-center gap-1.5 mb-3 flex-wrap">
          {[10, 50, 100, 500, 2000].map((t) => (
            <button
              key={t}
              onClick={() => setTrials(t)}
              className={`px-2.5 py-1 rounded text-xs font-bold transition ${
                trials === t
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t}回
            </button>
          ))}
        </div>

        <div className="p-3 bg-violet-50 rounded-lg border border-violet-200">
          <div className="text-xs text-slate-600 mb-1">
            キャップを上向きに出した実験：{trials}回中 <strong className="text-violet-900">{current.count}回</strong> 上向き
          </div>
          <div className="text-lg font-black text-violet-800">
            相対度数 ＝ {current.freq}
          </div>
          <div className="text-[11px] text-slate-600 mt-1">
            {trials <= 50
              ? '回数が少ないときは値が大きくブレます。もっと回数を増やしてみよう！'
              : '回数が増えるほど 0.41 付近の一定の値（確率）にピタッと落ち着いてきます！'}
          </div>
        </div>
      </div>
    </div>
  );
};
