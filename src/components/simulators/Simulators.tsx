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

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
          さわって体験：比例グラフ y = ax
        </span>
        <span className="text-xs font-bold text-indigo-900 font-mono">y = {a}x</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200">
        {/* Graph SVG */}
        <div className="flex justify-center">
          <svg viewBox="0 0 200 200" className="w-52 h-52 bg-slate-50 rounded border border-slate-200 select-none">
            {/* Grid */}
            {[-4, -3, -2, -1, 1, 2, 3, 4].map((n) => (
              <React.Fragment key={n}>
                <line x1={100 + n * 20} y1="10" x2={100 + n * 20} y2="190" stroke="#e2e8f0" strokeWidth="1" />
                <line x1="10" y1={100 + n * 20} x2="190" y2={100 + n * 20} stroke="#e2e8f0" strokeWidth="1" />
              </React.Fragment>
            ))}

            {/* Axes */}
            <line x1="10" y1="100" x2="190" y2="100" stroke="#64748b" strokeWidth="1.5" />
            <line x1="100" y1="10" x2="100" y2="190" stroke="#64748b" strokeWidth="1.5" />
            <text x="185" y="95" fontSize="10" fill="#64748b" fontWeight="bold">x</text>
            <text x="105" y="20" fontSize="10" fill="#64748b" fontWeight="bold">y</text>
            <text x="92" y="112" fontSize="9" fill="#64748b">O</text>

            {/* Line: y = a * x. In SVG coordinates: Y_svg = 100 - a * (X_svg - 100) */}
            {/* Calculate endpoints where x ranges from -4.5 to +4.5 */}
            <line
              x1={100 - 4.5 * 20}
              y1={100 + a * 4.5 * 20}
              x2={100 + 4.5 * 20}
              y2={100 - a * 4.5 * 20}
              stroke={a > 0 ? '#4f46e5' : a < 0 ? '#e11d48' : '#64748b'}
              strokeWidth="2.5"
            />

            {/* Origin Dot */}
            <circle cx="100" cy="100" r="4" fill="#0f172a" />

            {/* Point (1, a) */}
            {a !== 0 && (
              <circle
                cx={100 + 1 * 20}
                cy={100 - a * 20}
                r="3.5"
                fill={a > 0 ? '#4f46e5' : '#e11d48'}
              />
            )}
          </svg>
        </div>

        {/* Slope Controls */}
        <div className="mt-3 flex items-center justify-center gap-2">
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
            <span className="text-indigo-700 font-bold">右肩上がり（xが増えるとyも増える）</span>
          ) : (
            <span className="text-rose-700 font-bold">右肩下がり（xが増えるとyは減る）</span>
          )}
          <span className="block text-slate-500">※ 必ず原点 (0, 0) を通ります！</span>
        </div>
      </div>
    </div>
  );
};

export const InverseGraphSim: React.FC = () => {
  const [a, setA] = useState<number>(6);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
          さわって体験：反比例グラフ y = a/x
        </span>
        <span className="text-xs font-bold text-indigo-900 font-mono">y = {a}/x</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200">
        <div className="flex justify-center">
          <svg viewBox="0 0 200 200" className="w-52 h-52 bg-slate-50 rounded border border-slate-200 select-none">
            {/* Grid */}
            {[-4, -2, 2, 4].map((n) => (
              <React.Fragment key={n}>
                <line x1={100 + n * 20} y1="10" x2={100 + n * 20} y2="190" stroke="#e2e8f0" strokeWidth="1" />
                <line x1="10" y1={100 + n * 20} x2="190" y2={100 + n * 20} stroke="#e2e8f0" strokeWidth="1" />
              </React.Fragment>
            ))}

            {/* Axes */}
            <line x1="10" y1="100" x2="190" y2="100" stroke="#64748b" strokeWidth="1.5" />
            <line x1="100" y1="10" x2="100" y2="190" stroke="#64748b" strokeWidth="1.5" />
            <text x="185" y="95" fontSize="10" fill="#64748b" fontWeight="bold">x</text>
            <text x="105" y="20" fontSize="10" fill="#64748b" fontWeight="bold">y</text>

            {/* Hyperbolic Curves */}
            {a > 0 ? (
              <>
                {/* Quadrant 1 Curve */}
                <path
                  d="M 112 185 Q 120 120 185 112"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="2.5"
                />
                {/* Quadrant 3 Curve */}
                <path
                  d="M 88 15 Q 80 80 15 88"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="2.5"
                />
              </>
            ) : (
              <>
                {/* Quadrant 2 Curve */}
                <path
                  d="M 15 112 Q 80 120 88 185"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="2.5"
                />
                {/* Quadrant 4 Curve */}
                <path
                  d="M 185 88 Q 120 80 112 15"
                  fill="none"
                  stroke="#e11d48"
                  strokeWidth="2.5"
                />
              </>
            )}
          </svg>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          {[6, 12, -6, -12].map((val) => (
            <button
              key={val}
              onClick={() => setA(val)}
              className={`px-3 py-1 rounded text-xs font-bold transition ${
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
          なめらかな2本のカーブ（双曲線）！原点や縦横の軸には<strong className="text-rose-600">絶対に触れません</strong>。
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
        <svg viewBox="0 0 240 120" className="w-full h-32 select-none mx-auto">
          {/* Segment AB */}
          <line x1="50" y1="60" x2="190" y2="60" stroke="#475569" strokeWidth="2.5" />
          <circle cx="50" cy="60" r="4" fill="#0284c7" />
          <text x="40" y="65" fontSize="12" fontWeight="bold" fill="#0284c7">A</text>
          <circle cx="190" cy="60" r="4" fill="#0284c7" />
          <text x="200" y="65" fontSize="12" fontWeight="bold" fill="#0284c7">B</text>

          {/* Step 1 Arcs from A */}
          {step >= 1 && (
            <path
              d="M 110 20 A 80 80 0 0 1 110 100"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
          )}

          {/* Step 2 Arcs from B */}
          {step >= 2 && (
            <path
              d="M 130 20 A 80 80 0 0 0 130 100"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
          )}

          {/* Intersections */}
          {step >= 2 && (
            <>
              <circle cx="120" cy="22" r="3.5" fill="#f59e0b" />
              <circle cx="120" cy="98" r="3.5" fill="#f59e0b" />
            </>
          )}

          {/* Step 3 Perpendicular Line */}
          {step >= 3 && (
            <line x1="120" y1="10" x2="120" y2="110" stroke="#10b981" strokeWidth="2.5" />
          )}
        </svg>

        <div className="text-xs text-slate-700 font-medium my-2">
          {step === 1 && '① 点Aに針を刺し、線分の半分より長めに開いて上下に弧を描く'}
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

  const fraction = angle / 360;
  const arcLength = (2 * r * fraction).toFixed(1);
  const area = (r * r * fraction).toFixed(1);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">
          さわって体験：扇形（おうぎ形）シミュレータ
        </span>
        <span className="text-xs font-bold text-rose-800">半径 r = 6cm</span>
      </div>

      <div className="bg-white rounded-lg p-3 border border-slate-200">
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
  const [filter, setFilter] = useState<'all' | 'skew' | 'parallel' | 'intersect'>('skew');

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
          <svg viewBox="0 0 200 150" className="w-52 h-40 select-none">
            {/* Back edges (dashed) */}
            <line x1="60" y1="40" x2="60" y2="100" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="60" y1="100" x2="140" y2="100" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="60" y1="100" x2="30" y2="130" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Front & side edges */}
            {/* Top face: AB (x:30,y:70 -> x:110,y:70), CD (x:60,y:40 -> x:140,y:40), AD, BC */}
            {/* Reference AB */}
            <line x1="30" y1="70" x2="110" y2="70" stroke="#0284c7" strokeWidth="3.5" />
            <text x="70" y="65" fontSize="11" fontWeight="bold" fill="#0284c7">基準：辺AB</text>

            {/* Parallel to AB: CD, EF, GH */}
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

            {/* Skew lines to AB: CG, DH, FG, EH (Vertical and depth lines not touching AB) */}
            {/* Vertical lines: BF (intersect), AE (intersect) */}
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

            {/* Skew vertical lines: CG, DH */}
            <line
              x1="140"
              y1="40"
              x2="140"
              y2="100"
              stroke={filter === 'skew' ? '#f59e0b' : '#cbd5e1'}
              strokeWidth={filter === 'skew' ? '3.5' : '1.5'}
            />
            {/* Skew depth lines on bottom: FG, EH */}
            <line
              x1="110"
              y1="130"
              x2="140"
              y2="100"
              stroke={filter === 'skew' ? '#f59e0b' : '#cbd5e1'}
              strokeWidth={filter === 'skew' ? '3.5' : '1.5'}
            />

            {/* Top depth lines: AD, BC (intersect) */}
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
              黄色ハイライトの4本！平行でもなく交わりもしない、すれ違いの線です。
            </span>
          )}
          {filter === 'parallel' && '青ハイライト：線路のように向きが同じ線（3本）。'}
          {filter === 'intersect' && '赤ハイライト：辺ABの端点AやBでくっついている線（4本）。'}
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
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-3 text-slate-800">
      <div className="text-xs font-bold text-violet-700 bg-violet-100 px-2 py-0.5 rounded inline-block mb-2">
        ヒストグラムと階級値（ど真ん中）
      </div>
      <div className="bg-white rounded-lg p-3 border border-slate-200">
        <div className="flex items-end justify-center gap-3 h-28 pt-4 px-2 border-b border-slate-300">
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500 mb-1">3人</span>
            <div className="w-12 bg-violet-300 rounded-t h-12"></div>
            <span className="text-[10px] text-slate-600 mt-1 font-bold">10〜20</span>
            <span className="text-[9px] text-violet-700 font-bold">階級値15</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500 mb-1">8人</span>
            <div className="w-12 bg-violet-500 rounded-t h-24"></div>
            <span className="text-[10px] text-slate-600 mt-1 font-bold">20〜30</span>
            <span className="text-[9px] text-violet-700 font-bold">階級値25</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500 mb-1">5人</span>
            <div className="w-12 bg-violet-400 rounded-t h-16"></div>
            <span className="text-[10px] text-slate-600 mt-1 font-bold">30〜40</span>
            <span className="text-[9px] text-violet-700 font-bold">階級値35</span>
          </div>
        </div>
        <p className="text-[11px] text-center text-slate-600 mt-2">
          柱の横幅＝階級の幅、柱の高さ＝度数（人数）。真ん中の値が「階級値」です。
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
