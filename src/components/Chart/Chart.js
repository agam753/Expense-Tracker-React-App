import './Chart.css'
import ChartBar from './ChartBar';


const Chart = props => {
    const valueArray = props.datapoints.map(point=> point.value);

    const maxValue = Math.max(...valueArray);

    return (
        <div className='chart'>
            {
                props.datapoints.map(point =>
                    <ChartBar
                        key={point.label}
                        label={point.label}
                        value={point.value}
                        maxValue={maxValue}
                    />
                )
            }
        </div>
    )
}

export default Chart;