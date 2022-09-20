export default function StatisticsMenu({ label, percentage}) {
   {
        return (
            <li className="item">
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
            </li>
        
    )
  }
}