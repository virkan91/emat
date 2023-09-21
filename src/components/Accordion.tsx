import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  return (
    <div className="flex flex-col gap-8">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ background: "#F3F3F380" }}
        >
          <Typography>Havalandırma sistemleri neden önemlidir?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ background: "#1D0B24", color: "#FFF", padding: "50px" }}
          >
            Havalandırma sistemlerinin enerji tüketimi, tasarım, verimlilik ve
            mekanın büyüklüğüne göre değişebilir. Ancak, günümüzde gelişmiş
            teknolojiler ve enerji tasarruflu tasarımlar sayesinde HVAC
            sistemlerinin enerji tüketimi düşük tutulabilir.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ background: "#F3F3F380" }}
        >
          <Typography>
            Havalandırma sistemleri ne kadar enerji tüketir?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ background: "#1D0B24", color: "#FFF", padding: "50px" }}
          >
            Havalandırma sistemlerinin enerji tüketimi, tasarım, verimlilik ve
            mekanın büyüklüğüne göre değişebilir. Ancak, günümüzde gelişmiş
            teknolojiler ve enerji tasarruflu tasarımlar sayesinde HVAC
            sistemlerinin enerji tüketimi düşük tutulabilir.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ background: "#F3F3F380" }}
        >
          <Typography>
            Havalandırma sistemleri ne kadar enerji tüketir?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ background: "#1D0B24", color: "#FFF", padding: "50px" }}
          >
            Havalandırma sistemlerinin enerji tüketimi, tasarım, verimlilik ve
            mekanın büyüklüğüne göre değişebilir. Ancak, günümüzde gelişmiş
            teknolojiler ve enerji tasarruflu tasarımlar sayesinde HVAC
            sistemlerinin enerji tüketimi düşük tutulabilir.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ background: "#F3F3F380" }}
        >
          <Typography>
            Havalandırma sistemleri ne kadar enerji tüketir?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ background: "#1D0B24", color: "#FFF", padding: "50px" }}
          >
            Havalandırma sistemlerinin enerji tüketimi, tasarım, verimlilik ve
            mekanın büyüklüğüne göre değişebilir. Ancak, günümüzde gelişmiş
            teknolojiler ve enerji tasarruflu tasarımlar sayesinde HVAC
            sistemlerinin enerji tüketimi düşük tutulabilir.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ background: "#F3F3F380" }}
        >
          <Typography>
            Havalandırma sistemleri ne kadar enerji tüketir?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ background: "#1D0B24", color: "#FFF", padding: "50px" }}
          >
            Havalandırma sistemlerinin enerji tüketimi, tasarım, verimlilik ve
            mekanın büyüklüğüne göre değişebilir. Ancak, günümüzde gelişmiş
            teknolojiler ve enerji tasarruflu tasarımlar sayesinde HVAC
            sistemlerinin enerji tüketimi düşük tutulabilir.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
