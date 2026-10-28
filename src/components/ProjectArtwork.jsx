// Lightweight, decorative project illustrations. No image requests or chart dependencies.
function ProjectArtwork({ type }) {
  if (type === "heatcast") {
    return (
      <svg viewBox="0 0 360 190" fill="none">
        <circle cx="267" cy="54" r="24" stroke="currentColor" strokeWidth="2" />
        <path
          d="M267 19V10M267 89V98M232 54H223M302 54H311M243 30L236 23M291 78L298 85M291 30L298 23"
          stroke="currentColor"
          strokeOpacity=".5"
        />
        <path
          d="M44 67V154H315M44 113H315"
          stroke="currentColor"
          strokeOpacity=".13"
        />
        <path
          d="M45 135C69 138 72 111 91 115S114 141 136 112S164 73 186 83S209 117 230 88S266 66 310 101"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M45 135C69 138 72 111 91 115S114 141 136 112S164 73 186 83S209 117 230 88S266 66 310 101V154H45Z"
          fill="currentColor"
          opacity=".08"
        />
        <path
          d="M73 50H151M73 61H125"
          stroke="currentColor"
          strokeOpacity=".4"
          strokeWidth="3"
        />
      </svg>
    );
  }
  if (type === "hospital") {
    return (
      <svg viewBox="0 0 360 190" fill="none">
        <rect
          x="45"
          y="25"
          width="270"
          height="140"
          rx="12"
          fill="#222936"
          stroke="currentColor"
          strokeOpacity=".25"
        />
        <path
          d="M45 55H315M99 55V165"
          stroke="currentColor"
          strokeOpacity=".15"
        />
        <path
          d="M65 72H82M65 88H82M65 104H82"
          stroke="currentColor"
          strokeOpacity=".35"
          strokeWidth="3"
        />
        <rect
          x="116"
          y="72"
          width="56"
          height="33"
          rx="5"
          fill="currentColor"
          fillOpacity=".08"
        />
        <rect
          x="180"
          y="72"
          width="56"
          height="33"
          rx="5"
          fill="currentColor"
          fillOpacity=".08"
        />
        <rect
          x="244"
          y="72"
          width="50"
          height="33"
          rx="5"
          fill="currentColor"
          fillOpacity=".08"
        />
        <path
          d="M124 132H148L157 120L170 146L180 132H291"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M62 40H81M71 31V49" stroke="currentColor" strokeWidth="3" />
        <path
          d="M116 40H193"
          stroke="currentColor"
          strokeOpacity=".3"
          strokeWidth="3"
        />
        <circle cx="293" cy="40" r="4" fill="currentColor" opacity=".5" />
      </svg>
    );
  }
  if (type === "civic") {
    return (
      <svg viewBox="0 0 360 190" fill="none">
        <path
          d="M0 42H360M0 98H360M0 154H360M58 0V190M157 0V190M269 0V190"
          stroke="currentColor"
          opacity=".12"
          strokeWidth="16"
        />
        <path
          d="M66 144L125 105L173 117L227 52L295 68"
          stroke="currentColor"
          opacity=".35"
          strokeWidth="2"
          strokeDasharray="4 5"
        />
        <circle cx="227" cy="65" r="31" fill="currentColor" opacity=".08" />
        <path
          d="M227 35C214 35 204 44 204 57C204 74 227 95 227 95S250 74 250 57C250 44 240 35 227 35Z"
          fill="#bce5bd"
        />
        <circle cx="227" cy="57" r="8" fill="#243c35" />
        <circle cx="66" cy="144" r="6" fill="currentColor" />
        <circle cx="173" cy="117" r="5" fill="currentColor" opacity=".65" />
        <rect
          x="33"
          y="26"
          width="85"
          height="32"
          rx="8"
          fill="#182c27"
          stroke="currentColor"
          strokeOpacity=".2"
        />
        <circle cx="48" cy="42" r="3" fill="currentColor" />
        <path
          d="M59 42H102"
          stroke="currentColor"
          strokeOpacity=".6"
          strokeWidth="3"
        />
      </svg>
    );
  }
  if (type === "housing") {
    return (
      <svg viewBox="0 0 360 190" fill="none">
        <path
          d="M46 35V156H319M46 116H319M46 76H319M100 35V156M155 35V156M210 35V156M265 35V156"
          stroke="currentColor"
          opacity=".12"
        />
        <path
          d="M60 143L110 123L162 130L205 88L256 65L310 43"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M60 143L110 123L162 130L205 88L256 65L310 43V155H60Z"
          fill="currentColor"
          opacity=".06"
        />
        {[
          [75, 133],
          [98, 139],
          [130, 109],
          [160, 115],
          [187, 104],
          [209, 75],
          [239, 90],
          [268, 53],
          [289, 68],
        ].map(([cx, cy]) => (
          <circle
            key={cx}
            cx={cx}
            cy={cy}
            r="4"
            fill="currentColor"
            opacity=".65"
          />
        ))}
        <rect
          x="52"
          y="23"
          width="78"
          height="28"
          rx="7"
          fill="#25293d"
          stroke="currentColor"
          strokeOpacity=".2"
        />
        <path
          d="M66 41V33H70V41M76 41V29H80V41M86 41V35H90V41"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 360 190" fill="none">
      <rect
        x="91"
        y="20"
        width="177"
        height="151"
        rx="10"
        fill="#192c36"
        stroke="currentColor"
        strokeOpacity=".2"
      />
      <path
        d="M112 44H167M112 57H242M112 70H219M112 117H239M112 130H197M112 143H225"
        stroke="currentColor"
        strokeOpacity=".27"
        strokeWidth="4"
      />
      <rect
        x="104"
        y="83"
        width="144"
        height="22"
        rx="3"
        stroke="currentColor"
        strokeDasharray="3 3"
      />
      <path
        d="M114 94H139M148 94H190M199 94H236"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M77 78V68H87M272 68H282V78M77 110V120H87M272 120H282V110"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M70 97H291" stroke="currentColor" opacity=".5" />
    </svg>
  );
}

export default ProjectArtwork;
